# 🚀 Connex - Kommunikationsplattform  

Connex ist eine Kommunikationsplattform, die Echtzeit-Chat, Sprach- und Videoübertragungen sowie viele weitere Funktionen bietet. Die Anwendung wird kontinuierlich weiterentwickelt und hat das Ziel, eine skalierbare und benutzerfreundliche Lösung für Online-Kommunikation zu schaffen.  

## 🔧 **Technologien:**  
- **Backend:** C# | ASP.NET Core | SignalR (Echtzeit-Kommunikation)  
- **Frontend:** React | TypeScript | TailwindCSS  
- **Datenbanken:** Microsoft SQL Server | SQLite  
- **Cloud:** AWS (S3 für Dateispeicherung, EC2, Lambda)  
- **Weitere:** Docker, JWT, bcrypt, WebSocket, Azure (optional für Cloud-Services)  

## 📂 **Features:**  
- **Echtzeit-Text-Chat:** Mit WebSocket und SignalR für eine sofortige Kommunikation.  
- **Sprach- und Videoübertragung:** Integration von WebRTC für Sprach- und Video-Chats (Optionale Verwendung von Agora/Twilio).  
- **Benutzerregistrierung und -anmeldung:** Mit JWT für Token-basierte Authentifizierung und bcrypt für Passwortsicherung.  
- **Dateiupload im Chat:** Benutzer können Dateien hochladen und in AWS S3 speichern.  
- **Benachrichtigungen:** Echtzeit-Benachrichtigungen über SignalR oder AWS SNS.  
- **Profilmanagement und Themes:** Personalisierung von Benutzerprofilen und Anpassen von Themes.  
- **Cloud-Integration:** AWS für Hosting, Datenspeicherung und Skalierbarkeit.  

## 🛠 **Verwendete Tools & Frameworks:**  
- **Backend:** ASP.NET Core (für RESTful APIs und Echtzeitkommunikation)  
- **SignalR:** Echtzeit-Kommunikationsframework für Push-Benachrichtigungen und WebSockets  
- **JWT (JSON Web Tokens):** Authentifizierung und Autorisierung  
- **bcrypt:** Passwortsicherung  
- **WebRTC:** Für Echtzeit-Sprach- und Videoübertragung  
- **Docker:** Containerisierung der Anwendung für eine flexible Bereitstellung  
- **Kubernetes:** Verwaltung und Skalierung von Container-Anwendungen  
- **AWS SDK for .NET:** Integration von AWS-Diensten wie S3, Lambda und EC2  
- **Azure (optional):** Alternative Cloud-Plattform für Hosting und Services  
- **Datenbanken:** Microsoft SQL Server, PostgreSQL, SQLite  

## 📝 **Datenbanken:**  
- **Microsoft SQL Server:** Optimal für ASP.NET-Core-Anwendungen mit hoher Performance und Skalierbarkeit.  
- **PostgreSQL:** Für komplexe relationale Daten und Integrität.  
- **SQLite:** Leichte Datenbank für kleinere Anwendungen oder lokale Entwicklung.  

## 🧪 **Testing:**  
- **xUnit / NUnit / MSTest:** Unit-Testing-Frameworks für C#.  
- **TestServer:** Für Integrationstests innerhalb von ASP.NET Core.  
- **SonarQube:** Für Sicherheits- und Qualitätsprüfungen des Codes.  
- **Cypress / Jest:** Frontend-Testing für End-to-End-Tests und Unit-Tests (React).  

## 📈 **Ziele:**  
- **Aktueller Status:** In aktiver Entwicklung  
- **Nächste Schritte:** Implementierung von Video-Übertragungen, Rollensystem, Profilmanagement und erweiterten Benachrichtigungen.  
- **Langfristige Ziele:** Skalierbarkeit verbessern, zusätzliche Funktionen wie Gruppenchats und erweiterte Sicherheitsfunktionen einbauen.  

---

**Hinweis:** Dieses Repository befindet sich derzeit in aktiver Entwicklung und wird noch aktualisiert. Alle Pull Requests und Issues sind willkommen! ✨  


