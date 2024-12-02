<?php

namespace App\Controller;

use App\Service\Calcul;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HelloController extends AbstractController
{
    private $calcul;
    public function __construct(Calcul $calcul) {
        $this->calcul = $calcul;
    }

    /**
     * @return Response
     */
    #[Route('/test/hello')]
    public function hello() : Response
    {
        $maVariable = 'hello world';

        return new Response(
            '<html><body>' . $maVariable . '</body></html>'
        );
    }

    /**
     * Return the sum of the given 2 numbers
     *
     * @param int $nb1
     * @param int $nb2
     * @return Response
     */
    #[Route('/addition/{nb1}/{nb2}')]
    public function addition(int $nb1, int $nb2): Response
    {
        return new Response(
            '<html><body>' . $this->calcul->addition($nb1, $nb2) . '</body></html>'
        );
    }

    /**
     * @param int $nb1
     * @param int $nb2
     */
    #[Route('/test2/{nb1}/{nb2}')]
    public function test2(int $nb1, int $nb2): JsonResponse
    {
        return new JsonResponse('test');
    }

    /**
     * @param int $nb1
     * @param int $nb2
     * @return Response
     */
    #[Route('/additionv2/{nb1}/{nb2}')]
    public function soustraction(int $nb1, int $nb2): Response
    {
        return new Response(
            '<html><body>' . $this->calcul->soustraction($nb1, $nb2) . '</body></html>'
        );
    }


    #[Route('/table')]
    public function table(): Response
    {
        return new Response(
            '<html><body>' . $this->calcul->tableFor() . '</body></html>'
        );
    }

    /**
     * Exercice sur les tableaux indexés
     * @return void
     */
    #[Route('/tablefor')]
    public function tableFor()
    {
        echo __FILE__ . ' à la ligne ' . __LINE__ . '<br>';
        $i = 0;

        while(true) {

            echo 'ligne ' . __LINE__ . '<br>';

            if ($i == 2) {
                echo 'i est égale à 2 : ligne ' . __LINE__ . '<br>';
                break;
            }

            $i = $i + 1;
        }

        $test = [2, 3, 4, 5, 10, 11];

        echo 'ligne ' . __LINE__ . '<br>';

        echo 'la valeur 4 est situé dans le tableau test à lindex : ' . array_search(4, $test);

        $test = [
            'toto' => 2, 3, 4, 5, 10, 11];


        dump(array_keys($test));

        echo 'la valeur stockée à l\'index 2 est : ' . $test[2];

        $test = [
          'test' => 10,
            'produit' => [
                'nom' => 'testset',
                'prix' => 10
            ]
        ];

        dump($test);
        die();
        /*
         * the following foreach will loop
         * on the $test variable
         */

        // the following foreach will loop
        foreach($test as $key => $value) {
            echo $key . ' contient la valeur ' . $value . '<br>';
        }
    }
}