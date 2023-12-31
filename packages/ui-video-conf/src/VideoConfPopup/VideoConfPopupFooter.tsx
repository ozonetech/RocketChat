import { Margins } from '@rocket.chat/fuselage';
import type { ReactNode, ReactElement } from 'react';

const VideoConfPopupFooter = ({ children }: { children: ReactNode }): ReactElement => <Margins blockStart={28}>{children}</Margins>;

export default VideoConfPopupFooter;
