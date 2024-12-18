<?php

namespace App\EventListener;

use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\Mailer\Event\MessageEvent;

final class MailerListener
{
    #[AsEventListener(event: MessageEvent::class)]
    public function onMessageEvent(MessageEvent $event): void
    {
        // ...
    }
}
