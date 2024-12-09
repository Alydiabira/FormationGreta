<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241209092849 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD email VARCHAR(180) NOT NULL, ADD roles JSON NOT NULL, ADD password VARCHAR(255) NOT NULL, DROP nom, DROP prenom, DROP mot_de_passe, DROP date_de_naissance, DROP adresse, DROP ville, DROP code_postal, DROP phone_number');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL ON user (email)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX UNIQ_IDENTIFIER_EMAIL ON user');
        $this->addSql('ALTER TABLE user ADD prenom VARCHAR(255) NOT NULL, ADD mot_de_passe VARCHAR(255) NOT NULL, ADD date_de_naissance DATE NOT NULL, ADD adresse VARCHAR(255) NOT NULL, ADD ville VARCHAR(255) NOT NULL, ADD code_postal VARCHAR(255) NOT NULL, ADD phone_number INT DEFAULT NULL, DROP email, DROP roles, CHANGE password nom VARCHAR(255) NOT NULL');
    }
}
