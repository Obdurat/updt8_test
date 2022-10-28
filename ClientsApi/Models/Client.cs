namespace ClientsApi.Models;
   
public class Client {

    public enum Gender {
    M,
    F
    }

    public int id { get; set; }

    public string cpf { get; set; }
    
    public string name { get; set; }

    public DateTime birthDate { get; set; }

    public Gender sex { get; set; }

    public Cities city { get; set; }

    public States state { get; set; }
}
