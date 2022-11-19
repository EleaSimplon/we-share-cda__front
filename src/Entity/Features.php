<?php

namespace App\Entity;

use App\Repository\FeaturesRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource()]
#[ORM\Entity(repositoryClass: FeaturesRepository::class)]
class Features
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["activity:write"])]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $value = null;

    #[ORM\ManyToOne(inversedBy: 'features')]
    private ?Activity $activity = null;

    #[ORM\ManyToOne(inversedBy: 'featuresBis')]
    private ?FeaturesLabel $features_label = null;

    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(?string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getActivity(): ?Activity
    {
        return $this->activity;
    }

    public function setActivity(?Activity $activity): self
    {
        $this->activity = $activity;

        return $this;
    }

    public function getFeaturesLabel(): ?FeaturesLabel
    {
        return $this->features_label;
    }

    public function setFeaturesLabel(?FeaturesLabel $features_label): self
    {
        $this->features_label = $features_label;

        return $this;
    }

    // Admin : get unit type when adding an feature value
    public function __toString()
    {
        return $this->id;
    }

}
