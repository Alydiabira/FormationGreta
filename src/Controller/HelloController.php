<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


class HelloController extends AbstractController
{
    #[Route('/hello', name: 'app_hello')]
    public function hello(): Response
    {
        return $this->render('hello/hello.html.twig', [
            'controller_name' => 'HelloController',
        ]);
    }

    



    #[Route('/modulo', name: 'app_modulo')]
    public function modulo(): Response
    {
        return $this->render('hello/modulo.html.twig', [
            'controller_name' => 'ModuloController',
        ]);
    }



    #[Route('/multiplication', name: 'app_mutiplication')]
    public function mutiplication(): Response
    {
        return $this->render('hello/multiplication.html.twig', [
            'controller_name' => 'MutiplicationController',
        ]);
    }



    #[Route('/soustraction', name: 'app_soustraction')]
    public function soustraction(): Response
    {
        return $this->render('hello/soustraction.html.twig', [
            'controller_name' => 'SoustractionController',
        ]);
    }



    #[Route('/addition', name: 'app_addition')]
    public function addition(): Response
    {
        return $this->render('hello/addition.html.twig', [
            'controller_name' => 'AdditionController',
        ]);
    }

}