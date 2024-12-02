<?php

namespace App\Controller;

use App\Service\Calcul;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


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

       // Explications :
        // Définition du tableau $produits :
        // Chaque produit est représenté comme un tableau associatif contenant nom, prix, et en_stock.
        // Utilisation de foreach :
        // La boucle foreach parcourt chaque produit dans $produits.
        // Conditions :
        // Le stock est vérifié avec une condition if ($produit["en_stock"]).
        // Le prix est comparé avec if ($produit["prix"] > 2) pour ajouter la remarque "Produit Premium".
        // Affichage :
        // Les informations sont affichées avec echo.

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
        
        // Parcours du tableau $produits
        foreach ($produits as $produit) {
            // Affichage du nom et du prix
            echo "Produit : " . $produit["nom"] . ", Prix : " . $produit["prix"] . " €\n";
            
            // Vérification du stock
            if ($produit["en_stock"]) {
                echo "Message : Disponible\n";
            } else {
                echo "Message : Rupture de stock\n";
            }
            
            // Vérification du prix
            if ($produit["prix"] > 2) {
                echo "Remarque : Produit Premium\n";
            }
            
            echo "\n"; // Ligne vide pour séparer les produits
        }
    
        return $this->render('hello/produits.html.twig', 
        [
            'controller_name' => 'ProduitsController',
        ]);
    }




    #[Route('/modulo', name: 'app_modulo')]
    public function modulo(Calcul $modulo): Response
    {
        return $this->render('hello/modulo.html.twig', 
        [
            'resulta' => $modulo->add(1, 2),
            'controller_name' => 'ModuloController',
        ]);
    }



    #[Route('/multiplication', name: 'app_mutiplication')]
    public function mutiplication(Calcul $mutiplication): Response
    {
        return $this->render('hello/multiplication.html.twig', 
        [
            'resulta' => $mutiplication->multiply(1, 2),
            'controller_name' => 'MutiplicationController',
        ]);
    }



    #[Route('/soustraction', name: 'app_soustraction')]
    public function soustraction(Calcul $soustraction): Response
    {
        return $this->render('hello/soustraction.html.twig', 
        [
            'resulta' => $soustraction->subtract(1, 2),
            'controller_name' => 'SoustractionController',
        ]);
    }



    #[Route('/addition', name: 'app_addition')]
    public function addition(Calcul $addition): Response
    {
        return $this->render('hello/addition.html.twig', 
        [
        'resulta' => $addition->add(1, 2),
        'controller_name' => 'AdditionController',
        ]);
    }

    #[Route('/division', name: 'app_division')]
    public function division(Calcul $division): Response
    {
        return $this->render('hello/division.html.twig', 
        [
        'resulta' => $division->divide(1, 2),
        'controller_name' => 'DivisionController',
        ]);
    }

}