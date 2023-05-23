import * as Yup from 'yup';

import { REQUIRED_FIELD } from '../atoms/TextExports/TextExports';

export const validationSchema = Yup.object().shape({
    companyName: Yup.string()
        .required(REQUIRED_FIELD)
});

