<?php

namespace App\Controller\Admin;

use App\Entity\FeaturesLabel;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class FeaturesLabelCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return FeaturesLabel::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
