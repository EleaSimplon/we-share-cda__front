<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Security\PasswordHasher;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UserCrudController extends AbstractCrudController
{

    public const USER_BASE_PATH = 'upload/images/users';
    public const USER_UPLOAD_DIR = 'public/upload/images/users';

    private $passwordHasher;
    public function __construct(PasswordHasher $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            EmailField::new('email'),
            TextField::new('password')->setFormType(PasswordType::class),
            TextField::new('name'),
            TextField::new('description'),

            ImageField::new('profile_picture')
                ->setBasePath(self::USER_BASE_PATH)
                ->setUploadDir(self::USER_UPLOAD_DIR),
        ];
    }

    public function persistEntity(EntityManagerInterface $em, $entityInstance): void
    {
        if (!$entityInstance instanceof User) return;
        $entityInstance->setPassword($this->passwordHasher->hash($entityInstance->getPassword()));
        parent::persistEntity($em, $entityInstance);
    }
}
