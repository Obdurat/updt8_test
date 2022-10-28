using System.Text.Json.Serialization;

namespace ClientsApi.Models;

public class Cities {
    public int id { get; set; }

    public string name { get; set; }

    [JsonIgnore]
    public States state { get; set; }
}