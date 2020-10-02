import CMS from "netlify-cms-app";

import PagePreview from "./previews/PagePreview";
import withStyledComponentsRendered from "./withStyledComponents.js";

CMS.registerPreviewTemplate("pages", withStyledComponentsRendered(PagePreview));
