import * as Yup from 'yup';

export const helpFormSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

export const loginFormSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
});

export const signupFormSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  reCaptcha: Yup.string().required('Required'),
});

export const userFormSchema = Yup.object({
  skills: Yup.array()
    .min(1, 'Pick at least 1 skill')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  additionalSkills: Yup.array().of(
    Yup.object().shape({
      label: Yup.string(),
      value: Yup.string(),
    })
  ),
  languages: Yup.array()
    .min(1, 'Pick at least 1 language')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  description: Yup.string().required(),
  country: Yup.string().required(),
});

export const projectFormSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
  type: Yup.string().required(),
  startDate: Yup.string().required(),
  endDate: Yup.string().required(),
});

export const vacancyFormSchema = Yup.object({
  title: Yup.string().required(),
  experience: Yup.string().required(),
  description: Yup.string().required(),
  skills: Yup.array()
    .min(1, 'Pick at least 1 skill')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  timeCommitment: Yup.number().positive().required(),
  timeCommitmentUnits: Yup.string().required(),
});

export const experienceFormSchema = Yup.object({
  title: Yup.string().required(),
  yearsOfExperience: Yup.string().required(),
  companyName: Yup.string().required(),
  description: Yup.string().required(),

  skills: Yup.array()
    .min(1, 'Pick at least 1 skill')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
});
