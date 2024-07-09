import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Accès à un Réseau Étendu ",
    description:
      "Connectez-vous avec des milliers de professionnels et entreprises à travers l'Afrique.",
  },
  {
    icon: "BadgeCheck",
    title: "Recherche Personnalisée ",
    description:
      "Trouvez exactement ce que vous cherchez grâce à nos filtres avancés.",
  },
  {
    icon: "Goal",
    title: "Fiabilité et Confiance ",
    description:
      "Tous les profils sont vérifiés pour assurer des connexions de qualité.",
  },
  {
    icon: "PictureInPicture",
    title: "Opportunités de Carrière",
    description:
      "Accédez à des offres d'emploi exclusives et des opportunités de partenariat.",
  },
  // {
  //   icon: "MousePointerClick",
  //   title: "Clear CTA",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  // },
  // {
  //   icon: "Newspaper",
  //   title: "Clear Headline",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  // },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Avantages
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Pourquoi choisir Annuaire Expert ?
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
