export type ExtendedPermissionName =
  | PermissionName // built-in names
  | "clipboard-read"
  | "clipboard-write";

  export interface PermissionType {
  label: string;
  name: string;
  status: string | null;
}