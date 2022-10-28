using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClientsApi.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cities_State_stateid",
                table: "Cities");

            migrationBuilder.DropForeignKey(
                name: "FK_Clients_State_stateid",
                table: "Clients");

            migrationBuilder.DropTable(
                name: "State");

            migrationBuilder.CreateTable(
                name: "States",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "TEXT", nullable: false),
                    uf = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_States", x => x.id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_States_stateid",
                table: "Cities",
                column: "stateid",
                principalTable: "States",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Clients_States_stateid",
                table: "Clients",
                column: "stateid",
                principalTable: "States",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cities_States_stateid",
                table: "Cities");

            migrationBuilder.DropForeignKey(
                name: "FK_Clients_States_stateid",
                table: "Clients");

            migrationBuilder.DropTable(
                name: "States");

            migrationBuilder.CreateTable(
                name: "State",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "TEXT", nullable: false),
                    uf = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_State", x => x.id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_State_stateid",
                table: "Cities",
                column: "stateid",
                principalTable: "State",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Clients_State_stateid",
                table: "Clients",
                column: "stateid",
                principalTable: "State",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
