<?php

namespace App\Controller\Admin;

use App\Entity\Features;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FeaturesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Features::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('features_label'),
            AssociationField::new('activity'),
            TextField::new('value'),
        ];
    }
    
}
