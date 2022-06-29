export type TCreateRequestRequestData = {
    type: string
    tilaka_name?: string
    nik?: string
    channel_id?: string
    redirect_url?: string
}
  
  export type TCreateRequestResponseData = {
    error: boolean;
    message: string;
    data: {
      status: string;
      request_id: string;
      redirect_url: string;
    };
  };