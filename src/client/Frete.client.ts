import { Frete } from "@/model/Frete";
import axios, { AxiosInstance } from "axios";

export class FreteClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8090/api/frete",
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  public async findById(id: number): Promise<Frete> {
    try {
      return (await this.axiosClient.get<Frete>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll(): Promise<Frete[]> {
    try {
      return (await this.axiosClient.get<Frete[]>(``)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async create(frete: Frete): Promise<void> {
    try {
      return (await this.axiosClient.post(``, frete)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async update(frete: Frete): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${frete.id}`, frete)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      return (await this.axiosClient.delete(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
