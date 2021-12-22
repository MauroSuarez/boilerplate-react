export type Theme = 'paris' | 'easy';

export type TButton = {
  textPrimary?: string;
  textSecondary?: string;
  textTertiary?: string;
  textQuaternary?: string;
  textQuinary?: string;
  backgroundPrimary?: string;
  backgroundSecondary?: string;
  backgroundTertiary?: string;
  backgroundQuaternary?: string;
  backgroundQuinary?: string;
  hoverBackgroundPrimary?: string;
  hoverBackgroundSecondary?: string;
  hoverBackgroundTertiary?: string;
  hoverBackgroundQuaternary?: string;
  hoverBackgroundQuinary?: string;
  borderPrimary?: string;
  borderSecondary?: string;
  borderTertiary?: string;
  borderQuaternary?: string;
  borderQuinary?: string;
};

export type TPanel = {
  backgroundPrimary?: string;
  backgroundSecondary?: string;
  backgroundTertiary?: string;
  backgroundQuaternary?: string;
  backgroundQuinary?: string;
  backgroundDefault?: string;
};

export type TLink = {
  textPrimary?: string;
  textSecondary?: string;
  textTertiary?: string;
  textQuaternary?: string;
  textQuinary?: string;
};

export type TLabelStatus = {
  textSuccess?: string;
  textInfo?: string;
  textWarning?: string;
  textError?: string;
  backgroundSuccess?: string;
  backgroundWarning?: string;
  backgroundInfo?: string;
  backgroundError?: string;
};

export type TPagination = {
  textActive?: string;
  textInactive?: string;
  backgroundActive?: string;
  backgroundInactive?: string;
  arrowActive?: string;
  arrowInactive?: string;
};

export type TTimeLine = {
  textStatus?: string;
  textSubstatus?: string;
  textSubstatusActive?: string;
  pointSuccess?: string;
  pointWarning?: string;
  pointError?: string;
  pointInfo?: string;
  pointDefault?: string;
  barSuccess?: string;
  barWarning?: string;
  barError?: string;
  barInfo?: string;
  barDefault?: string;
};

export type TAlert = {
  backgroundPrimary?: string;
  backgroundSecondary?: string;
  backgroundTertiary?: string;
  backgroundQuaternary?: string;
  backgroundQuinary?: string;
};

export type TModal = {
  backgroundPrimary?: string;
  backgroundSecondary?: string;
  backgroundTertiary?: string;
  backgroundQuaternary?: string;
  backgroundQuinary?: string;
};

export type TTypography = {
  textH1Primary?: string;
  textH1Secondary?: string;
  textH1Tertiary?: string;
  textH1Quaternary?: string;
  textH1Quinary?: string;
  textH2Primary?: string;
  textH2Secondary?: string;
  textH2Tertiary?: string;
  textH2Quaternary?: string;
  textH2Quinary?: string;
  textH3Primary?: string;
  textH3Secondary?: string;
  textH3Tertiary?: string;
  textH3Quaternary?: string;
  textH3Quinary?: string;
  textH4Primary?: string;
  textH4Secondary?: string;
  textH4Tertiary?: string;
  textH4Quaternary?: string;
  textH4Quinary?: string;
  textH5Primary?: string;
  textH5Secondary?: string;
  textH5Tertiary?: string;
  textH5Quaternary?: string;
  textH5Quinary?: string;
  textPPrimary?: string;
  textPSecondary?: string;
  textPTertiary?: string;
  textPQuaternary?: string;
  textPQuinary?: string;
};

export type TSeparator = {
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  colorQuaternary?: string;
  colorQuinary?: string;
};

export interface ITheme {
  buttons?: TButton;
  panels?: TPanel;
  links?: TLink;
  labels?: TLabelStatus;
  timeline?: TTimeLine;
  pagination?: TPagination;
  alerts?: TAlert;
  modals?: TModal;
  typographys?: TTypography;
  separators?: TSeparator;
}
