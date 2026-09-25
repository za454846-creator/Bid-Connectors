<?php
/**
 * Contact form handler (cPanel / PHP)
 * The Contact Us form posts here; this sends the email.
 *
 * Settings:
 *   TO_EMAIL   -> where messages are delivered
 *   FROM_EMAIL -> sender address on your domain (create it in cPanel)
 */
const TO_EMAIL   = 'info@bidconnectors.com';
const FROM_EMAIL = 'no-reply@bidconnectors.com';

header('Content-Type: application/json; charset=utf-8');

function respond($code, $data) {
    http_response_code($code);
    echo json_encode($data);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Read the JSON body
$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

// Spam trap: hidden field; only bots fill it
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

// Prevent header injection (strip new lines)
$clean = function ($value, $max) {
    $value = trim(str_replace(["\r", "\n"], ' ', (string) ($value ?? '')));
    return mb_substr($value, 0, $max);
};

$name     = $clean($data['name'] ?? '', 100);
$email    = $clean($data['email'] ?? '', 150);
$phone    = $clean($data['phone'] ?? '', 40);
$language = ($data['language'] ?? '') === 'ar' ? 'Arabic' : 'English';
$message  = mb_substr(trim((string) ($data['message'] ?? '')), 0, 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please fill in name, a valid email and message']);
}

$subject = '=?UTF-8?B?' . base64_encode("New contact message from $name") . '?=';

$body  = "New message from the Bid Connectors contact form\n";
$body .= "------------------------------------------------\n\n";
$body .= "Name:     $name\n";
$body .= "Email:    $email\n";
$body .= "Phone:    " . ($phone !== '' ? $phone : '-') . "\n";
$body .= "Page:     $language\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: Bid Connectors <" . FROM_EMAIL . ">\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail(TO_EMAIL, $subject, $body, $headers, '-f' . FROM_EMAIL);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'Mail could not be sent']);
}

respond(200, ['ok' => true]);
