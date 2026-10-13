# Component conventies

## Props via `IProps`, uitpakken in de functie

Elke component met props declareert een lokale `interface IProps` en destructureert die op de eerste regel — niet in de parameterlijst.

```tsx
interface IProps {
    title: string;
    tags?: string[];
    onOpen: (slug: string) => void;
}

export default function ProjectCard(props: IProps) {
    const { title, tags = [], onOpen } = props;

    ...
}
```

- `IProps` staat boven de component, wordt niet geëxporteerd en niet hernoemd (elke file heeft zijn eigen `IProps`).
- Moet een parent de props typen? Exporteer dan een apart benoemd type; laat `IProps` lokaal.
- Geen props → geen `IProps`: `export default function Footer() {`.

## Direct exporteren

Altijd `export default function X()` op de declaratie zelf. Geen losse `export default X;` onderaan, geen `const X = () => ...`, geen `React.FC`.

```tsx
// Goed
export default function ProjectCard(props: IProps) { ... }

// Niet doen
const ProjectCard = (props: IProps) => { ... };
export default ProjectCard;
```

Helpers/hooks in dezelfde file gebruiken named exports (`export function useX()`) of blijven lokaal.

## Hook-volgorde in de component

1. router-/context-hooks
2. `const { classes, cx } = useStyles();`
3. data-/query-hooks
4. `useState` / `useMemo` / `useEffect`

## Formulieren

- Velden via één gedeelde `src/Components/FormField` (label, `maxLength`, foutmelding onder het veld); maak die aan bij het eerste formulier.
- Het formulier heeft `noValidate` en controleert bij verzenden zelf, met pure functies in `src/Helpers/`. Bij een fout gaat de focus naar het eerste foute veld.
- Een regel over meerdere velden (bv. "e-mail óf telefoon") staat als één melding onder de groep (`fieldset` met `legend`), niet bij één van de velden. Beide velden krijgen `invalid` en verwijzen met `describedBy` naar die melding; zet dan geen "(optioneel)" bij die velden.
- Komt er een backend: de frontend controleert even streng of strenger dan de API, zodat een gebruiker nooit een 400 krijgt voor een typfout. Wijzig je een regel aan één kant, pas dan de andere ook aan.
