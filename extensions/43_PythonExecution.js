// Run python code, from text, url and .py files.
// Olexandr_43
// Wi-Fi
// 09/22/2024

(function (Scratch) {
    'use strict';

    const icon =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPg0KIDxkZWZzPg0KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxnMSI+DQogICA8c3RvcCBzdG9wLWNvbG9yPSIjMzc3OGFlIiBvZmZzZXQ9IjAiLz4NCiAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNjZjOTkiIG9mZnNldD0iMSIvPg0KICA8L2xpbmVhckdyYWRpZW50Pg0KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxnMiI+DQogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBvZmZzZXQ9IjAiLz4NCiAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4xNjUiIG9mZnNldD0iMSIvPg0KICA8L2xpbmVhckdyYWRpZW50Pg0KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxnMyI+DQogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZlMjUzIiBvZmZzZXQ9IjAiLz4NCiAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmNhMWMiIG9mZnNldD0iMSIvPg0KICA8L2xpbmVhckdyYWRpZW50Pg0KICA8bGluZWFyR3JhZGllbnQgaWQ9ImxnNCI+DQogICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwIiBvZmZzZXQ9IjAiLz4NCiAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxIi8+DQogIDwvbGluZWFyR3JhZGllbnQ+DQogIDxsaW5lYXJHcmFkaWVudCB4MT0iOTQuNjkzIiB5MT0iMTEyLjUxMSIgeDI9Ijk0LjY5MyIgeTI9IjY0LjA1MyIgaWQ9ImxnNSIgeGxpbms6aHJlZj0iI2xnMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC4zNTM4NzgsMCwwLDAuMzUzODc4LC0xNy4zNzk1LC0xOS40MTIpIi8+DQogIDxsaW5lYXJHcmFkaWVudCB4MT0iNTkuNzI4IiB5MT0iMTAyIiB4Mj0iMTQyLjYyIiB5Mj0iMTAyIiBpZD0ibGc2IiB4bGluazpocmVmPSIjbGcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjM1Mzg3OCwwLDAsMC4zNTM4NzgsLTE3LjM3OTUsLTE5LjQxMikiLz4NCiAgPGxpbmVhckdyYWRpZW50IHgxPSI5NC42OTMiIHkxPSIxMTIuNTExIiB4Mj0iOTQuNjkzIiB5Mj0iNjQuMDUzIiBpZD0ibGc3IiB4bGluazpocmVmPSIjbGcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjM1Mzg3OCwwLDAsMC4zNTM4NzgsLTYuMjk2OTcsLTcuOTQ1MzcpIi8+DQogIDxsaW5lYXJHcmFkaWVudCB4MT0iMTE5LjE5MSIgeTE9Ijg5LjEzIiB4Mj0iMTE2Ljk2NSIgeTI9IjE2OS4yNzkiIGlkPSJsZzgiIHhsaW5rOmhyZWY9IiNsZzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuMzUzODc4LDAsMCwwLjM1Mzg3OCwtMTYuMzg5NywtMTcuOTk3KSIvPg0KICA8cmFkaWFsR3JhZGllbnQgY3g9IjE1LjExNSIgY3k9IjYzLjk2NSIgcj0iMTIuMjg5IiBmeD0iMTUuMTE1IiBmeT0iNjMuOTY1IiBpZD0icmcxIiB4bGluazpocmVmPSIjbGc0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjYsMCwwLDAuNTUxNzU0LC0wLjE4Mzk3NSw0LjgzNTc1KSIvPg0KIDwvZGVmcz4NCiA8cGF0aCBkPSJtIDQzLjY2MTgsNDAuMTI4OSBhIDE5LjY2MTgsNi43ODA1IDAgMCAxIC0zOS4zMjM2LDAgMTkuNjYxOCw2Ljc4MDUgMCAxIDEgMzkuMzIzNiwwIHoiIGZpbGw9InVybCgjcmcxKSIvPg0KIDxwYXRoIGQ9Im0gMzQuMDgwNCwzNy41Nzk1IGMgMCwyLjczMTkgLTIuMzcxLDQuMTE1NiAtNC43Nzc0LDQuODA1NyAtMy42MjAyLDEuMDQwNCAtNi41MjU1LDAuODgxMSAtOS41NTExLDAgLTIuNTI2OCwtMC43MzYyIC00Ljc3NzQsLTIuMjQwMiAtNC43Nzc0LC00LjgwNTcgbCAwLC05LjAxMzIgYyAwLC0yLjU5NCAyLjE2MjEsLTQuODA5MiA0Ljc3NzQsLTQuODA5MiBsIDkuMzk4NCwtMC42MTExIGMgMy4xODE0LDAgNS4yNjA2LC0xLjk4NTggNS4yNjA2LC01LjI0NSBsIDAuODY1NSwtNC4zNTY5IDMuNTgxMywwIGMgMi43ODE0LDAgNC4wOTA5LDIuMDY2NyA0Ljc3NzQsNC44MDU2IDAuOTU1NSwzLjgwNDMgMC45OTc4LDYuNjQ5NSAwLDkuNjE1IC0wLjk2NjEsMi44ODA1IC0yLDQuODA1NiAtNC43Nzc0LDQuODA1NiBsIC00Ljc3NzMsMCAtOS41NTEyLDAgMCwtMC4wMiBjIDguMjQyNCwwLjAyIDkuNTUxMiwtMy4zMTY0IDkuNTUxMiw0LjgyODEgeiIgZmlsbD0idXJsKCNsZzgpIi8+DQogPHBhdGggZD0ibSAyOC4xMTA0LDM4LjE3NzYgYyAwLC0wLjk5NDQgMC44MDMzLC0xLjgwMTMgMS43OTA2LC0xLjgwMTMgMSwwIDEuNzkwNiwwLjgwNjkgMS43OTA2LDEuODAxMyAwLDAuOTk3OSAtMC43OTk3LDEuODA0NyAtMS43OTA2LDEuODA0NyAtMC45ODczLDAgLTEuNzkwNiwtMC44MDY4IC0xLjc5MDYsLTEuODA0NyB6IiBmaWxsPSIjZmZmIi8+DQogPHBhdGggZD0ibSAzNS4yNjYyLDEzLjU0MzYgMCw0LjIyNjUgQyAzMS44NTUxLDIzLjc2NyAyNS4zNzUsMjMuNzc4NyAxOS45MzksMjMuNzc4NyBsIC0yLjAxNywwLjIwNTIgYyAtMi44MzQyLDIuNDM2NCAtMi45MjQ0LDYuMzQ2MyAtMi45MjIzLDkuNzc1NiA2LjI1MDIsLTYuOTc0MiAxMi45MTc0LC03LjUwMDQgMTYuMjQzNiwtNy40ODU0IDYuNjM3NywwLjAyOSA5Ljc2MzgsLTEuNjAyOSAxMi45MzM5LC01LjE5MzkgLTAuMDE2LC0wLjA3IDAuMDE2LC0wLjEzMiAwLC0wLjIwMzcgLTAuMTIyMiwtMC44IC0wLjMzNjIsLTEuNjU0NCAtMC41NjAxLC0yLjU0NiAtMC4zMjE4LC0xLjI4MzkgLTAuNzQyOCwtMi40MTQxIC0xLjQyNTcsLTMuMjU4OSAtMC4wMTYsLTAuMDE2IC0wLjAzOCwtMC4wMzQgLTAuMDUxLC0wLjA1IDAsMCAtMC4wNDIsMCAtMC4wNSwwIC0wLjAyMywtMC4wMjggLTAuMDI4LC0wLjA3NSAtMC4wNSwtMC4xMDExIC0wLjA0NywtMC4wMzQgLTAuMDUyLC0wLjA3IC0wLjEwMSwtMC4xMDEgLTAuMDE2LC0wLjAxNiAtMC4wMzksMC4wMTYgLTAuMDUsMCBDIDQxLjE2NTMsMTQuMzUwMiA0MC4yODU4LDE0IDM5LjM5NDIsMTMuODUxOSAzOC41ODYxLDEzLjcxODMgMzcuNzc1LDEzLjYxNjUgMzYuOTUsMTMuNTQ2NCBsIC0wLjUwOTIsMCAtMS4xNzExLDAgeiIgb3BhY2l0eT0iMC44MzciIGZpbGw9InVybCgjbGc3KSIvPg0KIDxwYXRoIGQ9Im0gMzQuNTU5LDM3LjU3OSBjIDAsMi43MzIgLTIuODQ5Nyw0LjExNiAtNS4yNTYsNC44MDYgLTMuNjIsMS4wNCAtNi41MjUsMC44ODEgLTkuNTUxLDAgLTIuNTI3LC0wLjczNiAtNC44MDEsLTIuMjQgLTQuODA1LC00LjgwNSBsIC0wLjAxNiwtOS4yNTggYyAtMC4wMSwtMy4wNzMgMi4zMDIsLTUuMDEgNC44NDksLTUgbCA4LjQ2NjcsMC4wMTUgYyAzLjI1LDAgNi40MSwtMy4zIDYuNDAxLC02LjU1IGwgMCwtMy4yMzcgNC4yMSwwIGMgMi43ODE0LDAgNC4wOSwyLjA2NyA0Ljc3Nyw0LjgwNiAwLjk1NiwzLjgwNCAxLDYuNjQ5IDAsOS42MTUgLTAuOTY2LDIuODggLTIsNS4xNDc2IC00Ljc3Nyw1LjE0OCBsIC00LjMsMCAtMTAuMDMsMCAwLC0wLjAyIDEwLjAzLDAuMDM0IHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2JiOTQwMCIgc3Ryb2tlLXdpZHRoPSIxLjYzIi8+DQogPHBhdGggZD0ibSAzNS40NjUzLDE0LjM1ODQgMCwyLjM5MzMgYyAwLDMuNzI0NSAtMy40OTY1LDcuMzc1NyAtNy40ODA5LDcuMzc1NyBsIC04LjI0OTEsMCBjIC0yLjg1MDYsMCAtNC4wMTg0LDIuMTU2OSAtNC4wMDQyLDQuNDM3OSBsIDAuMDU2LDkuMDEyOSBjIDAuMDEsMS4wNDQ2IDAuNCwxLjgyMzUgMS4xNDgsMi40OTUxIDAuNzQ4LDAuNjcxNSAxLjg3MjYsMS4xODMgMy4wNTUzLDEuNTI3NyAyLjkxNjQsMC44NDkyIDUuNTc2LDEuMDAyMiA5LjA2MzgsMCAxLjEzMjcsLTAuMzI0OCAyLjYzOTQsLTAuOTQwMSAzLjM5NzYsLTEuNTk2NCAwLjc1ODEsLTAuNjU2NSAxLjMwNzcsLTEuMjk2MSAxLjMwNzcsLTIuNDI2NCBsIDAsLTMuNjI5OCAtMTAuMDUyLDAgMCwtMS42Nzk1IDE1LjE3NDMsMC4wNSBjIDEuMjAwOCwwIDEuNzg4LC0wLjQ3MjQgMi4zODQ0LC0xLjE2MzMgMC41OTY0LC0wLjY5MSAxLjExNDksLTIuMDQ2OSAxLjU4NzQsLTMuNDU2IDAuOTQ1NiwtMi44MDk2IDAuOTMzNiwtNS40NDkxIDAsLTkuMTY1OCAtMC4zMjUyLC0xLjI5NzggLTAuNzk3NiwtMi4zNDYxIC0xLjQyNTcsLTMuMDU1MiAtMC42MjgsLTAuNzA5MSAtMS4zNTcsLTEuMTIwMiAtMi41NDYxLC0xLjEyMDIgeiBtIDEuNjI5NCwxLjYyOTQgMS43ODY3LDAgYyAwLjUyMDIsMCAxLjE5OTMsMC40MTk0IDEuMzI0LDAuNTYwMiAwLjM2MjUsMC40MDkzIDAuNzgsMS4yMzg2IDEuMDY5NCwyLjM5MzIgMC44ODk1LDMuNTQxNiAwLjg5MTUsNS43NTE1IDAuMDUsOC4yNDkxIC0wLjQ1MTcsMS4zNDcgLTAuOTIwNSwyLjYxNDIgLTEuMjcyOSwzIC0wLjMxODQsMC4zMzk1IC0xLDAuNTA5MyAtMS4xNzEzLDAuNTA5MyBsIC00Ljc4NjUsLTAuMDUxIC0xMi4wMTczLDAgMCw0LjkzODQgMTAuMDUyLDAgMCwyIGMgMCwwLjcyNyAtMC45NzMzLDEuMTc4OSAtMS4xNDA4LDEuMzIzOSAtMC40ODcyLDAuNDIxOSAtMS4zNTA4LDAuODM1OSAtMi4zNDIzLDEuMTIwMiAtMy4yMjMsMC45MjY0IC01LjUsMC43ODU5IC04LjE5ODQsMCAtMS4wMjExLC0wLjI5NzUgLTEuOTA2MSwtMC43MzM5IC0yLjQwNjksLTEuMTU5NSAtMC41MDA4LC0wLjQyNTYgLTAuNTMxNiwtMC43NzQxIC0wLjYyMzgsLTEuMjg1IGwgLTAuMDU2LC05LjAxMjkgYyAtMC4wMTMsLTIuMDIyNCAwLjY0NTcsLTIuODA4NCAyLjM3NDgsLTIuODA4NCBsIDguMjQ5MSwwIGMgNC45MjMzLDAgOS4xMTAzLC00LjM1MDIgOS4xMTAzLC05LjAwNTIgMWUtNCwtMC4yNTc0IC0xMGUtNSwtMC41MTQ5IC0xMGUtNSwtMC43NzIzIHoiIG9wYWNpdHk9IjAuMzg0IiBmaWxsPSIjZmZmIi8+DQogPHBhdGggZD0ibSAxMy45ODQ3LDcuMzE5OSBjIDAsLTIuNzMxOSAwLjczMjQsLTQuMjE4MiA0Ljc3NzIsLTQuOTI2IDIuNzQ2MiwtMC40ODEzIDYuMjY3MywtMC41NDE0IDkuNTUxMywwIDIuNTkzOSwwLjQyODIgNC43Nzc0LDIuMzYwNCA0Ljc3NzQsNC45MjYgbCAwLDkuMDEzNCBjIDAsMi42NDM0IC0yLjExOTgsNC44MDkxIC00Ljc3NzQsNC44MDkxIGwgLTguNjYyMSwwLjQ3ODggYyAtMy4yNDE0LDAgLTYuNTg5LDIuODMyMSAtNi41ODksNS45NTcgbCAtMC4yNzM2LDMuNzc3IC0zLjI4NCwwIGMgLTIuNzc3OSwwIC00LjM5NTEsLTIuMDAyOSAtNS4wNzQ1LC00LjgwNTYgLTAuOTE2NiwtMy43NjUxIC0wLjg3NzYsLTYuMDA4OCAwLC05LjYxNDcgMC43NjA4LC0zLjE0NjEgMy4xOTIsLTQuODA1OCA1LjcsLTQuODA1OCBsIDMuNTg0OCwwIGMgMCwwIDguOTQ0OCwtMC4wMzUgMCwtMC4wMzIgbCAwLC00Ljc3NzEgMCwwIHoiIGZpbGw9InVybCgjbGc2KSIvPg0KIDxwYXRoIGQ9Im0gMTYuMzczMyw2LjcyMTggYyAwLC0xIDAuOCwtMS44MDQ4IDEuNzkwNiwtMS44MDQ4IDAuOTg3MywwIDEuNzkwNywwLjgwNjggMS43OTA3LDEuODA0OCAwLDAuOTk0NCAtMC44MDM0LDEuODAxMiAtMS43OTA3LDEuODAxMiAtMC45OTA4LDAgLTEuNzkwNiwtMC44MDY4IC0xLjc5MDYsLTEuODAxMiB6IiBmaWxsPSIjZmZmIi8+DQogPHBhdGggZD0iTSAyMi43MTczLDEuOTk1NSBDIDIxLjMwMzksMi4wMjk3IDE5Ljk0NjksMi4xOTIzIDE4Ljc0NTUsMi40MDI4IDE0LjcwMDcsMy4xMTA2IDE0LjAxLDQuNjEwMiAxNC4wMSw3LjM0MjEgbCAtMC4yOTUyLDQuNzg3IC0zLjMyMDMsLTNlLTQgYyAtMi43Nzc5LDAgLTUuMTk2OCwxLjY0MDYgLTUuOTU3Niw0Ljc4NjQgLTAuNTE2NSwyLjEyMjUgLTAuNzUwNCwzLjc4NDIgLTAuNjYyMSw1LjU1MDQgNi4yOTI0LC03LjEzMTkgMTMuMDQ0MiwtNy42NTMxIDE2LjM5NjUsLTcuNjM4IDYuNjM3NiwwLjAyOSA5Ljc2MzcsLTEuNjAyOSAxMi45MzM4LC01LjE5MzkgbCAwLC0yLjI5MTQgYyAwLC0yLjU2NTUgLTIuMTkyNiwtNC41MTEgLTQuNzg2NSwtNC45MzkyIEMgMjYuNDcxNCwyLjA5ODMgMjQuNTM0NSwxLjk1MTUgMjIuNzE3MywxLjk5NTUgeiIgb3BhY2l0eT0iMC4zNzciIGZpbGw9InVybCgjbGc1KSIvPg0KIDxwYXRoIGQ9Im0gMTguNjk2LDIuNjI3MSBjIDMuNjIwMSwtMS4wNDA0IDYuNTI1NSwtMC44ODExIDkuNTUxLDAgMi41MjY4LDAuNzM2MSA0Ljc3ODcsMi4yNCA0Ljc3NzQsNC44MDU3IGwgMCw5LjczMTUgYyAwLDEuMzY2MiAtMS45NzQ2LDQuNTI5MyAtNC43NzI2LDQuNTI5MyBsIC04Ljg5ODgsMCBjIC0yLjQ5ODMsMCAtNS45OTcsMi43MjE3IC01Ljk5Nyw1Ljk4MSBsIDAsMy43OTM3IC00LjIxLDAgYyAtMi43ODE1LDAgLTQuMDkwOSwtMi4wNjY3IC00Ljc3NzQsLTQuODA1OCAtMC45NTU1LC0zLjgwNDEgLTEsLTYuNjQ5MyAwLC05LjYxNDggMC45NjYxLC0yLjg4MDYgMiwtNS4xNDc3IDQuNzc3NCwtNS4xNDc3IGwgNC4yOTg1LDAgMTAuMDMsMCAwLDAuMDE5IC0xMC4wMywtMC4wMzQgMC4wMTksLTQuODczMyBjIC0wLjAyNiwtMS45OTY1IDIuNDE0NiwtMy41NTI0IDUuMjMyMywtNC4zODQ1IHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI3NGU3MCIgc3Ryb2tlLXdpZHRoPSIxLjYzIi8+DQogPHBhdGggZD0ibSAxMi41MzM3LDMwLjY1MzggMCwtMi43OTYgYyAwLC0zLjcyNDYgMy4zOTUzLC03LjAyODcgNy4wNDYxLC03LjAyODcgbCA4LjY4MzksMCBjIDIuMTU0OSwwIDQuMDI0LC0yLjI0MTEgNC4wMDQyLC00LjM4MjEgTCAzMi4xODQ1LDcuNDM0IEMgMzIuMTc0OCw2LjM4OTUgMzEuODEyMyw1LjYxMDUgMzEuMDY0Miw0LjkzODkgMzAuMzE2Myw0LjI2NzMgMjkuMTkxNiwzLjc1NTggMjguMDA5LDMuNDExMyBjIC0yLjkxNjYsLTAuODQ5NCAtNS41NzYyLC0xLjAwMjMgLTkuMDYzOSwwIC0xLjEzMjYsMC4zMjQ4IC0yLjYzOTYsMC45NCAtMy4zOTc2LDEuNTk2NCAtMC43NTgyLDAuNjU2NCAtMS4zMDc2LDEuMjk2IC0xLjMwNzYsMi40MjYzIGwgMCwzLjYyOTggMTAuMDUxOSwwIDAsMS42ODA0IC0xNS4xNzQzLC0wLjA1MSBjIC0xLjIsMCAtMS43ODgsMC40NzI0IC0yLjM4NDQsMS4xNjM0IC0wLjU5NjQsMC42OTA4IC0xLjExNDksMi4wNDY3IC0xLjU4NzQsMy40NTU5IC0wLjk0NTYsMi44MDk2IC0wLjkzMzUsNS40NDkgMCw5LjE2NTcgMC4zMjUyLDEuMjk3OCAwLjc5NzYsMi4zNDYxIDEuNDI1OCwzLjA1NTIgMC42MjgsMC43MDkyIDEuMzU3LDEuMTIwMyAyLjU0NiwxLjEyMDMgbCAzLjQxNjIsMCB6IG0gLTEuNjI5NSwtMS42Mjk1IC0xLjc4NjcsMCBjIC0wLjUyLDAgLTEuMiwtMC40MTk0IC0xLjMyMzksLTAuNTYgQyA3LjQzMSwyOC4wNTQ5IDcuMDEzNSwyNy4yMjU1IDYuNzI0MSwyNi4wNzA5IDUuODM0NiwyMi41Mjk0IDUuODMyNywyMC4zMTk2IDYuNjczNiwxNy44MjE4IDcuMTI1MywxNi40NzUgNy41OTQxLDE1LjIwNzcgNy45NDY2LDE0LjgzMTkgOC4yNjUsMTQuNDkyNiA4LjkzNzUsMTQuMzIyNyA5LjExNzgsMTQuMzIyNyBsIDE2LjgwMzgsMC4wNTEgMCwtNC45Mzk0IC0xMC4wNTE5LDAgMCwtMiBjIDAsLTAuNzI3IDAuOTczMiwtMS4xNzg5IDEuMTQwNywtMS4zMjM5IDAuNDg3MywtMC40MjE5IDEuMzUwOSwtMC44MzU5IDIuMzQyNCwtMS4xMiAzLjIyMjksLTAuOTI2MiA1LjUsLTAuNzg1OCA4LjE5ODMsMCAxLjAyMTIsMC4yOTc1IDEuOTA2MSwwLjczMzkgMi4zOTMyLDEuMTcxMiAwLjE3MzMsMC4xMzUyIDAuMjY0NiwwLjI5NzMgMC40MDc4LDAuNDU4MiAwLjE5ODcsMC4yMzcgMC4xNTUyLDAuNTUwMjMgMC4yMDExLDAuODE0NyBsIDAsOS4wMTMgYyAwLDEuMjM1NyAtMS4wNTY1LDIuNzUyNyAtMi4yOTEzLDIuNzUyNyBsIC04LjY4MzksMCBjIC00LjU4OTcsMCAtOC42NzU2LDQuMDAyOSAtOC42NzU2LDguNjU4MSAwLDAuMzg3NSAwLDEuMTY2IDAsMS4xNjYgeiIgb3BhY2l0eT0iMC4xNjUiIGZpbGw9IiNmZmYiLz4NCjwvc3ZnPg==";

    class PythonExecution {
        constructor() {
            this.output = '';
            this.pyodideReady = false;
            this.pyodide = null;

            this.getInfo = function () {
                return {
                    id: 'PythonExecution',
                    name: 'Python Execution',
                    blocks: [
                        {
                            opcode: 'loadPyodide',
                            blockType: Scratch.BlockType.COMMAND,
                            text: 'load Pyodide version [version]',
                            arguments: {
                                version: {
                                    type: Scratch.ArgumentType.STRING,
                                    menu: 'versionMenu'
                                }
                            }
                        },
                        {
                            opcode: 'checkPyodide',
                            blockType: Scratch.BlockType.BOOLEAN,
                            text: 'is Pyodide loaded?',
                            arguments: {}
                        },
                        "---",
                        {
                            opcode: 'executeBlock',
                            blockType: Scratch.BlockType.COMMAND,
                            text: 'execute [code]',
                            arguments: {
                                code: {
                                    type: Scratch.ArgumentType.ALL
                                }
                            }
                        },
                        {
                            opcode: 'executePythonCode',
                            blockType: Scratch.BlockType.REPORTER,
                            text: 'execute Python code [code]',
                            arguments: {
                                code: {
                                    type: Scratch.ArgumentType.STRING,
                                    defaultValue: "print('Hello from Python!')"
                                }
                            }
                        },
                        {
                            opcode: 'executePythonFromURL',
                            blockType: Scratch.BlockType.REPORTER,
                            text: 'execute Python code from URL [url]',
                            arguments: {
                                url: {
                                    type: Scratch.ArgumentType.STRING,
                                    defaultValue: 'https://raw.githubusercontent.com/Olexandr43/TurboWarp-Extensions/main/examples/example.py'
                                }
                            }
                        },
                        {
                            opcode: 'uploadPythonFile',
                            blockType: Scratch.BlockType.REPORTER,
                            text: 'upload and execute Python file',
                            arguments: {},
                            disableMonitor: true
                        },
                        "---",
                        {
                            opcode: 'getOutput',
                            blockType: Scratch.BlockType.REPORTER,
                            text: 'output of last execution',
                            arguments: {}
                        },
                        {
                            opcode: 'clearOutput',
                            blockType: Scratch.BlockType.COMMAND,
                            text: 'clear output',
                            arguments: {}
                        },
                        {
                            opcode: 'copyOutputToClipboard',
                            blockType: Scratch.BlockType.COMMAND,
                            text: 'copy output to clipboard',
                            arguments: {}
                        },
                        "---",
                        {
                            opcode: 'setPythonVariable',
                            blockType: Scratch.BlockType.COMMAND,
                            text: 'set Python variable [varName] to [value]',
                            arguments: {
                                varName: {
                                    type: Scratch.ArgumentType.STRING,
                                    defaultValue: 'myVar'
                                },
                                value: {
                                    type: Scratch.ArgumentType.STRING,
                                    defaultValue: '42'
                                }
                            }
                        },
                        {
                            opcode: 'getPythonVariable',
                            blockType: Scratch.BlockType.REPORTER,
                            text: 'get Python variable [varName]',
                            arguments: {
                                varName: {
                                    type: Scratch.ArgumentType.STRING,
                                    defaultValue: 'myVar'
                                }
                            }
                        },
                        {
                            opcode: 'deletePythonVariable',
                            blockType: Scratch.BlockType.COMMAND,
                            text: 'delete Python variable [varName]',
                            arguments: {
                                varName: {
                                    type: Scratch.ArgumentType.STRING,
                                    defaultValue: 'myVar'
                                }
                            }
                        },
                        {
                            opcode: 'listPythonVariables',
                            blockType: Scratch.BlockType.REPORTER,
                            text: 'list all Python variables',
                            arguments: {},
                            disableMonitor: true
                        }
                    ],
                    menus: {
                        versionMenu: {
                            acceptReporters: true,
                            items: [
                                { text: '0.18.1', value: '0.18.1' },
                                { text: '0.26.2', value: '0.26.2' },
                                { text: '0.21.0', value: '0.21.0' }
                            ]
                        }
                    },
                    color1: "#306998",
                    color2: "#989130",
                    color3: "#FFD43B",
                    menuIconURI: icon,
                };
            };

            // Load specific version of Pyodide from menu
            this.loadPyodide = async (args) => {
                const version = args.version;

                if (this.pyodideReady) {
                    return `Error: Pyodide version ${version} is already loaded`;
                }

                const pyodideScript = document.createElement('script');
                pyodideScript.src = `https://cdn.jsdelivr.net/pyodide/v${version}/full/pyodide.js`;
                pyodideScript.onerror = () => {
                    console.error("Failed to load Pyodide script");
                };
                pyodideScript.onload = async () => {
                    try {
                        this.pyodide = await loadPyodide({ indexURL: `https://cdn.jsdelivr.net/pyodide/v${version}/full/` });
                        this.pyodideReady = true;
                        console.log(`Pyodide version ${version} loaded successfully`);
                    } catch (error) {
                        console.error('Error loading Pyodide:', error);
                    }
                };
                document.body.appendChild(pyodideScript);
                return `Loading Pyodide version ${version}...`;
            };

            // Helper to override Python's print function
            this.createPythonPrintHandler = () => {
                return (msg) => {
                    this.output += msg + '\n';
                };
            };

            // Check Pyodide ready state
            this.checkPyodide = () => {
                return this.pyodideReady;
            };

            this.executeBlock = async (args) => {

            }

            // Execute Python code and return output
            this.executePythonCode = async (args) => {
                const code = args.code;
                if (!this.pyodideReady) {
                    return 'Pyodide not ready yet';
                }
                try {
                    this.output = '';  // Reset output before execution
                    this.pyodide.globals.set('print', this.createPythonPrintHandler());  // Redirect print to output
                    await this.pyodide.runPython(code);
                } catch (error) {
                    this.output = `Error: ${error.message}`;
                }
                return this.output;  // Return the captured output
            };

            // Get last Python output
            this.getOutput = () => {
                return this.output;
            };

            // Clear output
            this.clearOutput = () => {
                this.output = '';
            };

            // Copy output to clipboard
            this.copyOutputToClipboard = () => {
                navigator.clipboard.writeText(this.output).then(() => {
                    console.log('Output copied to clipboard');
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            };

            // Upload Python file and execute, returning the output
            this.uploadPythonFile = async () => {
                return new Promise((resolve) => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = '.py';
                    input.onchange = async (event) => {
                        const file = event.target.files[0];
                        if (file) {
                            const text = await file.text();  // Read file content
                            const output = await this.executePythonCode({ code: text });  // Execute the code
                            resolve(output);  // Return the captured output when done
                        } else {
                            resolve('Error: No file selected');
                        }
                    };
                    input.click();
                });
            };

            // Execute Python code from a URL, returning the output
            this.executePythonFromURL = async (args) => {
                const url = args.url;
                if (!this.pyodideReady) {
                    return 'Pyodide not ready yet';
                }
                // Basic URL check for .py extension
                if (!url.endsWith('.py')) {
                    return 'Error: URL does not point to a Python (.py) file';
                }
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        return `Error: Failed to fetch Python code from ${url}`;
                    }
                    const code = await response.text();  // Fetch and read the code
                    const output = await this.executePythonCode({ code });  // Execute and get output
                    return output;  // Return the captured output
                } catch (error) {
                    console.error('Failed to fetch Python code from URL:', error);
                    return `Error: Could not execute Python code from ${url}`;
                }
            };

            // Set Python variable
            this.setPythonVariable = async (args) => {
                const { varName, value } = args;
                if (!this.pyodideReady) {
                    return 'Pyodide not ready yet';
                }
                try {
                    await this.pyodide.runPython(`${varName} = ${JSON.stringify(value)}`);
                } catch (error) {
                    console.error('Error setting variable:', error);
                }
            };

            // Get Python variable
            this.getPythonVariable = (args) => {
                const varName = args.varName;
                if (!this.pyodideReady) {
                    return 'Pyodide not ready yet';
                }
                try {
                    const variable = this.pyodide.globals.get(varName);
                    if (variable === undefined) {
                        return `Warning: Python variable '${varName}' is not defined`;
                    }
                    return variable.toString();
                } catch (error) {
                    console.error('Error getting variable:', error);
                    return `Error: Unable to retrieve the variable '${varName}'`;
                }
            };

            // Delete Python variable
            this.deletePythonVariable = async (args) => {
                const varName = args.varName;
                if (!this.pyodideReady) {
                    return 'Pyodide not ready yet';
                }
                try {
                    await this.pyodide.runPython(`del ${varName}`);
                } catch (error) {
                    console.error('Error deleting variable:', error);
                }
            };

            // List all Python variables
            this.listPythonVariables = () => {
                if (!this.pyodideReady) {
                    return 'Pyodide not ready yet';
                }
                try {
                    const variables = this.pyodide.runPython('globals().keys()');
                    return JSON.stringify(Array.from(variables));
                } catch (error) {
                    console.error('Error listing variables:', error);
                    return 'Error: Unable to retrieve variable list';
                }
            };
        }
    }

    Scratch.extensions.register(new PythonExecution());
})(Scratch);