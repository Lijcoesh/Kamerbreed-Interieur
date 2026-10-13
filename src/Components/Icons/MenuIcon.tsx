import { SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';

// Material Icons "Menu" (Apache-2.0)
export default function MenuIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
        </SvgIcon>
    );
}
