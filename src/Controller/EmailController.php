<?php

namespace App\Controller;

use App\Service\MailService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class EmailController extends AbstractController
{
    #[Route('/send-email', name: 'send_email')]

    private MailService $mailService;

    public function sendEmail(): Response
    {
        $this->mailService->sendEmail(
            'recipient@example.com',
            'Subject of the Email',
            '<p>This is the HTML content of the email.</p>'
        );

        return new Response('Email sent!');
    }
}
