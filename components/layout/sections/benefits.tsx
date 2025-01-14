import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Inscrivez-vous",
    description: "Créez votre compte gratuitement en quelques clics.",
  },
  {
    icon: "LineChart",
    title: "Créez Votre Profil ",
    description:
      "Ajoutez vos informations professionnelles et mettez en avant vos compétences.",
  },
  {
    icon: "Wallet",
    title: "Recherchez et Connectez",
    description:
      "Utilisez notre moteur de recherche pour trouver et connecter avec des professionnels et entreprises.",
  },
  {
    icon: "Sparkle",
    title: "Collaborez et Croissez",
    description:
      "Engagez des discussions, formez des partenariats et faites croître votre réseau.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Guide</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre raccourci vers le succès
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Comment Ça Marche ?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
