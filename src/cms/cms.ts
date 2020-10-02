import CMS from "netlify-cms-app";

import PagePreview from "./previews/PagePreview";
import HomePreview from "./previews/HomePreview";
import withStyledComponentsRendered from "./withStyledComponents.js";

CMS.registerPreviewTemplate("pages", withStyledComponentsRendered(PagePreview));
CMS.registerPreviewTemplate("home", withStyledComponentsRendered(HomePreview));
