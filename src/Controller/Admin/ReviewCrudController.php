<?php

namespace App\Controller\Admin;

use App\Entity\Review;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ReviewCrudController extends AbstractCrudController
{

    /* Image : review */
    public const REVIEW_BASE_PATH = 'upload/images/reviews';
    public const REVIEW_UPLOAD_DIR = 'public/upload/images/reviews';

    public static function getEntityFqcn(): string
    {
        return Review::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            /* Recup id User connected */
            AssociationField::new('user'),
            /* Recup id Activity connected */
            AssociationField::new('activity'),
            TextField::new('title'),
            TextareaField::new('description'),
            ImageField::new('picture')
                ->setBasePath(self::REVIEW_BASE_PATH)
                ->setUploadDir(self::REVIEW_UPLOAD_DIR),
            DateField::new('posted_at')->hideOnForm(),
            IntegerField::new('rate'),
        ];
    }

    public function persistEntity(EntityManagerInterface $em, $entityInstance): void
    {
        if (!$entityInstance instanceof Review) return;

        $entityInstance->setPostedAt(new \DateTimeImmutable);

        parent::persistEntity($em, $entityInstance);
    }

    /*
    public function deleteEntity(EntityManagerInterface $em, $entityInstance): void
    {
        if (!$entityInstance instanceof Review) return;

        foreach ($entityInstance->getActivity() as $activity) {
            $em->remove($activity);
        }

        parent::deleteEntity($em, $entityInstance);
    }
    */

}
