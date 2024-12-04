<?php

namespace App\Controller;

use App\Service\Calcul;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpKernel\Event\ResponseEvent;





class HelloController extends AbstractController
{

    /** Returns the sun of the given 2 numbers
     * @parm int $numbers
     * 
     */
    #[Route('/hello', name: 'app_hello')]
    public function hello(): Response
    {
        return $this->render('hello/hello.html.twig', [
            'controller_name' => 'HelloController',
        ]);
    }

    #[Route('/tableaux')]
    public function tableaux(): Response
    {

        $numbers = [];
        for ($i = 0; $i < 10; $i++) {
            $numbers[] = rand(1, 10); 
        }

        $comparisons = [];
        for ($i = 0; $i < count($numbers) - 1; $i++) {
            $isGreater = $numbers[$i] > $numbers[$i + 1];
            $comparisons[] = sprintf(
                "Index %d (%d) est %s Index %d (%d)",
                $i,
                $numbers[$i],
                $isGreater ? "plus grand que" : "pas plus grand que",
                $i + 1,
                $numbers[$i + 1]
            );
        }
        
        return
        $this->json(data: [
            'numbers' => $numbers,
            'comparisons' => $comparisons,

        ]);

    }
    

 #[Route('/produits', name: 'app_produits')]
public function produits(): Response
{
    $produits = [
        [
            "nom" => "Pomme",
            "prix" => 1.5,
            "en_stock" => true
        ],
        [
            "nom" => "Banane",
            "prix" => 2.5,
            "en_stock" => false
        ],
        [
            "nom" => "Cerise",
            "prix" => 3.0,
            "en_stock" => true
        ]
    ]; 
    
    // Add custom remarks to each product
    foreach ($produits as &$produit) {
        if ($produit["prix"] > 2) {
            $produit["remarque"] = "Produit Premium";
        } else {
            $produit["remarque"] = "Produit Standard";
        }
    }

    // Pass the data to Twig
    return $this->render('hello/produits.html.twig', [
        'produits' => $produits,
        'controller_name' => 'ProduitsController',
    ]);
}




    #[Route('/modulo', name: 'app_modulo')]
    public function modulo(Calcul $modulo): Response
    {
        $a = 10;
        $b = 20;
        $result = $a % $b;

        return $this->render('hello/modulo.html.twig', 
        [
            'a' => $a,
            'b' => $b,
            'result' => $result,
            'resulta' => $modulo->add(10, 20),
            'controller_name' => 'ModuloController',
        ]);
    }



    #[Route('/multiplication', name: 'app_mutiplication')]
    public function mutiplication(Calcul $mutiplication): Response
    {

        $a = 10;
        $b = 20;
        $result = $a * $b;

        return $this->render('hello/multiplication.html.twig', 
        [
            'a' => $a,
            'b' => $b,
            'result' => $result,
            'resulta' => $mutiplication->multiply(10, 20),
            'controller_name' => 'MutiplicationController',
        ]);
    }


    #[Route('/soustraction', name: 'app_soustraction')]
    public function soustraction(Calcul $soustraction): Response
    {
        $a = 10;
        $b = 18;
        $result = $a - $b;
    
        return $this->render('hello/soustraction.html.twig', [
            'a' => $a,
            'b' => $b,
            'result' => $result,
            'resulta' => $soustraction->subtract(10, 18),
            'controller_name' => 'SoustractionController',
        ]);
    }

   
    



    #[Route('/addition', name: 'app_addition')]
    public function addition(Calcul $addition): Response
    {

        $a = 1;
        $b = 2;
        $result = $a + $b;

        return $this->render('hello/addition.html.twig', 
        [
            'a' => $a,
            'b' => $b,
            'result' => $result,
            'resulta' => $addition->add(1, 2),
            'controller_name' => 'AdditionController',
        ]);
    }

    /**
     * Return the sum of the given 2 numbers
     *
     * @param int $nb1
     * @param int $nb2
     * @return Response
     */
    // #[Route(path: '/addition/{nb1}/{nb2}')]
    // public function addition(int $nb1, int $nb2): Response
    // {
    //     return new Response(
    //         '<html><body>' . $this->calcul->addition($nb1, $nb2) . '</body></html>'
    //     );
    // }

    #[Route('/division', name: 'app_division')]
    public function division(Calcul $division): Response
    {
        $a = 10;
        $b = 50;
        $result = $a / $b;
        return $this->render('hello/division.html.twig', 
        [
            'a' => $a,
            'b' => $b,
            'result' => $result,
        'resulta' => $division->divide(10, 50),
        'controller_name' => 'DivisionController',
        ]);
    }


    public function someAction(Request $request)
{

    
    // Get a specific header
    $headerValue = $request->headers->get('Authorization');

    // Get all headers
    $allHeaders = $request->headers->all();

    $response = new Response('Content', Response::HTTP_OK);
    $response->headers->set('Content-Type', 'application/json');
    $response->headers->set('X-Custom-Header', 'CustomValue');
    $response = new Response('Content');
    $cookie = new Cookie('my_cookie', 'cookie_value', strtotime('tomorrow'));
    $response->headers->setCookie($cookie);

    return $response;
}




    public function onKernelResponse(ResponseEvent $event)
    {
        $response = $event->getResponse();
        $response->headers->set('X-Global-Header', 'Value');
    }

    public function somePage()
    {
        return $this->render('base.html.twig', [
            'user' => $this->getUser(), // Returns the authenticated user or null
        ]);
    }
    



}