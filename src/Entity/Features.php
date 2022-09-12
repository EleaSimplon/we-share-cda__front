<?php

namespace App\Entity;

use App\Repository\FeaturesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FeaturesRepository::class)]
class Features
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $value = null;

    #[ORM\OneToMany(mappedBy: 'features', targetEntity: FeaturesLabel::class)]
    private Collection $features_label;

    #[ORM\ManyToMany(targetEntity: Activity::class)]
    private Collection $activity;

    public function __construct()
    {
        $this->features_label = new ArrayCollection();
        $this->activity = new ArrayCollection();
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

    /**
     * @return Collection<int, FeaturesLabel>
     */
    public function getFeaturesLabel(): Collection
    {
        return $this->features_label;
    }

    public function addFeaturesLabel(FeaturesLabel $featuresLabel): self
    {
        if (!$this->features_label->contains($featuresLabel)) {
            $this->features_label->add($featuresLabel);
            $featuresLabel->setFeatures($this);
        }

        return $this;
    }

    public function removeFeaturesLabel(FeaturesLabel $featuresLabel): self
    {
        if ($this->features_label->removeElement($featuresLabel)) {
            // set the owning side to null (unless already changed)
            if ($featuresLabel->getFeatures() === $this) {
                $featuresLabel->setFeatures(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Activity>
     */
    public function getActivity(): Collection
    {
        return $this->activity;
    }

    public function addActivity(Activity $activity): self
    {
        if (!$this->activity->contains($activity)) {
            $this->activity->add($activity);
        }

        return $this;
    }

    public function removeActivity(Activity $activity): self
    {
        $this->activity->removeElement($activity);

        return $this;
    }
}
