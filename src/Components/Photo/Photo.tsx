import { makeStyles } from 'tss-react/mui';

import PhotoPlaceholder from 'src/Components/PhotoPlaceholder/PhotoPlaceholder';
import type { PhotoSource } from 'src/Definitions/PhotoSource';

interface IProps {
    photo?: PhotoSource;
    // CSS aspect-ratio, bv. '4 / 3'; de foto wordt bijgesneden tot deze verhouding
    ratio: string;
    // Tekst op de placeholder zolang er geen foto is
    label?: string;
    // Alleen voor de foto in het eerste scherm
    eager?: boolean;
    className?: string;
}

const useStyles = makeStyles<{ ratio: string; position: string }>()((_theme, props) => ({
    root: {
        display: 'block',
        width: '100%',
        aspectRatio: props.ratio,
        objectFit: 'cover',
        objectPosition: props.position,
        borderRadius: 4,
    },
}));

// Een foto op een vaste verhouding, of de placeholder zolang de PO hem nog niet heeft gestuurd
export default function Photo(props: IProps) {
    const { photo, ratio, label, eager = false, className } = props;

    const { classes, cx } = useStyles({ ratio, position: photo?.position ?? 'center' });

    if (!photo) {
        return <PhotoPlaceholder ratio={ratio} label={label} className={className} />;
    }

    return (
        <img
            src={photo.src}
            alt={photo.alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className={cx(classes.root, className)}
        />
    );
}
