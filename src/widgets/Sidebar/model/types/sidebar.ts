import React from 'react';

export interface SidebarItemInterface {
    path: string,
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;

}
