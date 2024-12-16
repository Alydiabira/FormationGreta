<?php

namespace App\DataFixtures;

use App\Entity\Article;
use App\Factory\ArticleFactory;
use App\Factory\ResetPasswordRequestFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        ArticleFactory::createMany(50);
        ResetPasswordRequestFactory::createMany(20);
        UserFactory::createMany(5);
        UserFactory::createMany(100);

        $manager->flush();
    }
}
