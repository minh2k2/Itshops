import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export function GoogleIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M21.35 11.1h-9.18v2.92h5.68c-.24 1.44-1.68 4.21-5.68 4.21-3.42 0-6.21-2.83-6.21-6.31s2.79-6.31 6.21-6.31c1.95 0 3.25.83 4 1.53l2.74-2.66C17.63 3.09 15.21 2 12.17 2 6.94 2 2.82 6.27 2.82 11.5s4.12 9.5 9.35 9.5c5.39 0 8.94-3.79 8.94-9.13 0-.61-.06-1.06-.16-1.57z" />
    </SvgIcon>
  );
}

export function FacebookIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
    </SvgIcon>
  );
}

export function SitemarkIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M10 16l6-4-6-4z" fill="#fff" />
    </SvgIcon>
  );
}
