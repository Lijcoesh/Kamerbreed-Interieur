import { SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';

// Material Icons "ArrowForward" (Apache-2.0)
export default function ArrowForwardIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </SvgIcon>
    );
}
