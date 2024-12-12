<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;


class UserController extends AbstractController
{
    #[Route('/user/new', name: 'user_new')]
    public function new(Request $request, EntityManagerInterface $entityManager): Response

    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'User created successfully!');
            return $this->redirectToRoute('user_new');
        }
        return $this->render('user/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    public function notifications(): Response
    {
        // get the user information and notifications somehow
        $userFirstName = '...';
        $userNotifications = ['...', '...'];

        // the template path is the relative file path from `templates/`
        return $this->render('user/notifications.html.twig', [
            // this array defines the variables passed to the template,
            // where the key is the variable name and the value is the variable value
            // (Twig recommends using snake_case variable names: 'foo_bar' instead of 'fooBar')
            'user_first_name' => $userFirstName,
            'notifications' => $userNotifications,
        ]);
    }

}
