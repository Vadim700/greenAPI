export interface Message {
  id: string;
  text: string;
  timestamp: number;
  fromMe: boolean;
}

export interface Chat {
  phoneNumber: string;
  messages: Message[];
}

export interface AuthState {
  idInstance: string;
  apiTokenInstance: string;
  isAuthenticated: boolean;
  setCredentials: (idInstance: string, apiTokenInstance: string) => void;
  logout: () => void;
}
