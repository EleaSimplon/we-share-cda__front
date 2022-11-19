<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{

    public const USER_BASE_PATH = 'upload/images/users';
    public const USER_UPLOAD_DIR = 'public/upload/images/users';

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            EmailField::new('email'),
            TextField::new('password'),
            TextField::new('name'),
            TextField::new('description'),

            ImageField::new('profile_picture')
                ->setBasePath(self::USER_BASE_PATH)
                ->setUploadDir(self::USER_UPLOAD_DIR),
        ];
    }

}
