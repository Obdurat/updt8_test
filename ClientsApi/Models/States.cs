using System.Text.Json.Serialization;

namespace ClientsApi.Models;

public class States {
    public int id { get; set; }

    public string name { get; set; }

    public string uf { get; set; }

    [JsonIgnore]
    public List<Cities> cities { get; set; }
}