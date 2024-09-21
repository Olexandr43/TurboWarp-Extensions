// Interact with Scratch Authentication to prove the player is a real scratch user.
// Olexandr_43 [Just Ported]
// Wi-Fi
// 09/21/2024

class JgScratchAuthenticateBlocks {
  constructor() {
      this.currentPrivateCode = '';
      this.promptStatus = {
          inProgress: false,
          blocked: false,
          completed: false,
          userClosed: false,
      };
      this.loginInfo = {};
  }

  getInfo() {
      return {
          id: 'jgScratchAuthenticate',
          name: 'Scratch Auth',
          color1: '#FFA01C',
          color2: '#ff8C00',
          blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNTkuODg4MzciIGhlaWdodD0iMzU5Ljg4ODM3IiB2aWV3Qm94PSIwLDAsMzU5Ljg4ODM3LDM1OS44ODgzNyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDU1ODEsLTAuMDU1ODEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLjA1NTgxLDE4MGMwLC05OS4zODA0MyA4MC41NjM3NiwtMTc5Ljk0NDE5IDE3OS45NDQxOSwtMTc5Ljk0NDE5Yzk5LjM4MDQzLDAgMTc5Ljk0NDE5LDgwLjU2Mzc2IDE3OS45NDQxOSwxNzkuOTQ0MTljMCw5OS4zODA0MyAtODAuNTYzNzYsMTc5Ljk0NDE5IC0xNzkuOTQ0MTksMTc5Ljk0NDE5Yy05OS4zODA0MywwIC0xNzkuOTQ0MTksLTgwLjU2Mzc2IC0xNzkuOTQ0MTksLTE3OS45NDQxOXoiIGZpbGw9IiNmZmEwMWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI4Ny43NTE3OCwxOTMuOTAzOTJjMCw0OC43MzkxMyAtMzkuMjQxMzIsODguMjUgLTEwNy43NSw4OC4yNWMtNjguMDA4NjgsMCAtMTA3Ljc1LC0zOS41MTA4NyAtMTA3Ljc1LC04OC4yNWMwLC05LjE5MDg0IC0wLjIzMTIyLC0xOS4xOTU3NiAzLjAzODI3LC0yNy43NTgwN2M1LjIwNzY0LC0xMy42Mzc5OSA4LjkxMjAzLC03NC42MDAwOCAyMC40NjE3OCwtODYuNTA3OWM4Ljg2Mzg3LC05LjEzODY2IDI5Ljc5MTQsMzAuNjM4MTggNDMuOTQ5NzcsMjUuNTc0NzRjMTIuNjU3NTUsLTQuNTI2NyAyNS40NDQ2NiwtNC41NTg3NiAzOS44MDAxNywtNC41NTg3NmMxMy4wODE0OSwwIDI2LjU0NjAzLDIuMTAyNTggMzguMDMyNzIsNS45MDEwN2MxMC41MDM3OSwzLjQ3MzQ2IDM4LjkwMjM3LC0zMy43MjE1IDQ0LjI4MjQyLC0yOC4xMzYyN2MxNC42MDcxNSwxNS4xNjQyMSAxNi42NDA2LDY5LjQxMTk3IDIyLjUyNTM5LDg4Ljc4MzY1YzIuMjI3NDQsNy4zMzIzMyAzLjQwOTQ3LDE4Ljk1MDg0IDMuNDA5NDcsMjYuNzAxNTZ6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMjUiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxNzkuOTQ0MTg2MDQ2NTExNjI6MTc5Ljk0NDE4NjA0NjUxMTYyLS0+",
          blocks: [
              {
                  opcode: 'showPrompt',
                  text: 'show login message as [NAME]',
                  blockType: Scratch.BlockType.COMMAND,
                  arguments: {
                      NAME: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'PenguinMod'
                      }
                  }
              },
              {
                  opcode: 'getPromptStatus',
                  text: 'login prompt [STATUS]?',
                  blockType: Scratch.BlockType.BOOLEAN,
                  arguments: {
                      STATUS: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'inProgress',
                          menu: 'promptStatus'
                      }
                  }
              },
              {
                  opcode: 'privateCode',
                  text: 'authentication code',
                  disableMonitor: true,
                  blockType: Scratch.BlockType.REPORTER
              },
              {
                  opcode: 'serverRedirectLocation',
                  text: 'redirect location',
                  disableMonitor: true,
                  blockType: Scratch.BlockType.REPORTER
              },
              "---",
              {
                text: "The blocks below invalidate",
                blockType: Scratch.BlockType.LABEL
              },
              {
                text: "the authentication code from above.",
                blockType: Scratch.BlockType.LABEL
              },
              {
                  opcode: 'validLogin',
                  text: 'login is valid?',
                  disableMonitor: true,
                  blockType: Scratch.BlockType.BOOLEAN
              },
              {
                  opcode: 'scratchUsername',
                  text: 'scratch username',
                  disableMonitor: true,
                  blockType: Scratch.BlockType.REPORTER
              }
          ],
          menus: {
              promptStatus: {
                  acceptReporters: true,
                  items: [
                      { text: 'in progress', value: 'inProgress' },
                      { text: 'blocked', value: 'blocked' },
                      { text: 'complete', value: 'completed' },
                      { text: 'closed by the user', value: 'userClosed' }
                  ]
              }
          }
      };
  }

  showPrompt(args) {
      const loginLocation = args.NAME;
      this.promptStatus = {
          inProgress: true,
          blocked: false,
          completed: false,
          userClosed: false,
      };
      this.loginInfo = {};

      const sanitizedName = encodeURIComponent(loginLocation.substring(0, 256).replace(/[^a-zA-Z0-9 _\-\.\[\]\(\)]+/gmi, ""));
      const waitingLink = `https://studio.penguinmod.com/scratchAuthExt.html?openLocation=${encodeURIComponent(window.origin)}`;

      let login;
      let finished = false;
      const listener = (event) => {
          if (event.origin !== (new URL(waitingLink)).origin) return;
          if (!(event.data && event.data.scratchauthd1)) return;

          const data = event.data.scratchauthd1;
          this.currentPrivateCode = data.pv;

          this.promptStatus.inProgress = false;
          this.promptStatus.completed = true;

          finished = true;
          window.removeEventListener('message', listener);
          login.close();
      };
      window.addEventListener('message', listener);

      login = window.open(
          `https://auth.itinerary.eu.org/auth/?redirect=${btoa(waitingLink)}${sanitizedName.length > 0 ? `&name=${sanitizedName}` : ''}`,
          'Scratch Authentication',
          'scrollbars=yes,resizable=yes,status=no,location=yes,toolbar=no,menubar=no,width=768,height=512,left=200,top=200'
      );
      if (!login) {
          this.promptStatus.inProgress = false;
          this.promptStatus.blocked = true;
          return;
      }

      const closedInterval = setInterval(() => {
          if (!login.closed) return;

          this.promptStatus.inProgress = false;
          if (!finished) {
              this.promptStatus.userClosed = true;
          }
          window.removeEventListener('message', listener);
          clearInterval(closedInterval);
      }, 500);
  }

  getPromptStatus(args) {
      const option = args.STATUS;
      if (!(option in this.promptStatus)) return false;
      return this.promptStatus[option];
  }

  privateCode() {
      const code = this.currentPrivateCode;
      this.currentPrivateCode = '';
      return code;
  }

  serverRedirectLocation() {
      const waitingLink = `https://studio.penguinmod.com/scratchAuthExt.html?openLocation=${window.origin}`;
      return waitingLink;
  }

  async validLogin() {
      if (Object.keys(this.loginInfo).length <= 0) {
          try {
              await this.parseLoginCode_();
          } catch {
              return false;
          }
      }
      return !!this.loginInfo.valid;
  }

  async scratchUsername() {
      if (Object.keys(this.loginInfo).length <= 0) {
          try {
              await this.parseLoginCode_();
          } catch {
              return '';
          }
      }
      return this.loginInfo.username;
  }

  async parseLoginCode_() {
      if (!this.currentPrivateCode) throw new Error('Private code not present');
      const req = await fetch(`https://pm-bapi.vercel.app/api/verifyToken?privateCode=${this.currentPrivateCode}`);
      const json = await req.json();
      this.loginInfo = {
          valid: json.valid,
          username: json.username
      };
      return this.loginInfo;
  }
}

Scratch.extensions.register(new JgScratchAuthenticateBlocks());
