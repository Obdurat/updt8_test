using static ClientsApi.Models.Client;

namespace ClientsApi.DTO;

public class ClientDTO {

    public string cpf { get; set; }
    
    public string name { get; set; }

    public DateTime birthDate { get; set; }

    public Gender sex { get; set; }

    public int city { get; set; }

    public int state { get; set; }
}