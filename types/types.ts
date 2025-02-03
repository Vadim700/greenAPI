export interface Message {
  id: string;
  text: string;
  timestamp: number;
  fromMe: boolean;
}

export interface Chat {
  archive: boolean;
  id: string;
  notSpam: boolean;
  ephemeralExpiration: number;
  ephemeralSettingTimestamp: number;
  muteEndTime: number;
  name: string;
}

export interface AuthState {
  idInstance: string;
  apiTokenInstance: string;
  isAuthenticated: boolean;
  setCredentials: (idInstance: string, apiTokenInstance: string) => void;
  logout: () => void;
}
