<?php

namespace App\Form;

use App\Entity\Activity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('company')
            ->add('address')
            ->add('phone_number')
            ->add('schedule')
            ->add('duration')
            ->add('name')
            ->add('city')
            ->add('country')
            ->add('published_at')
            ->add('picture')
            ->add('price')
            ->add('description')
            ->add('short_description')
            ->add('unit')
            ->add('user')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Activity::class,
        ]);
    }
}
