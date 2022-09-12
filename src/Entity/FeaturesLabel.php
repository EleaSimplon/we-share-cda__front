<?php

namespace App\Entity;

use App\Repository\FeaturesLabelRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FeaturesLabelRepository::class)]
class FeaturesLabel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $label = null;

    #[ORM\ManyToOne(inversedBy: 'features_label')]
    private ?Features $features = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(?string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getFeatures(): ?Features
    {
        return $this->features;
    }

    public function setFeatures(?Features $features): self
    {
        $this->features = $features;

        return $this;
    }
}
