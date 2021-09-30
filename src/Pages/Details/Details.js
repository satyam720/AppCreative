import './Details.css';

const Details = () => {

    return(
        <>
        <div className="details">
            <h3>Business start with great features</h3>
            <p>Build an incredible workplace and grow your business with Gusto’s <br /> all-in-one platform with amazing contents.</p>
        </div>
        <div className="container-fluid p-5">
            <div className="row p-2">
                <div className="col-lg-3 col-sm-6">
                    <img className="img1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY2LjM0OCA2NC42MDlsLTIxLjU2NSA5LjkxM2MtMS4wNDQuNTIyLTIuMjYxLjUyMi0zLjMwNS4xNzQtMi4wODctLjg3LTMuNjUyLTIuOTU3LTMuNjUyLTUuMjE4IDAtMy4xMyAyLjYwOS01LjczOSA1Ljc0LTUuNzM5TDcuNzM4IDQ4LjYxQzQuNjEgNDguNjA5IDIgNTEuMDQ0IDIgNTQuMTc0YzAgMi4yNjEgMS4yMTcgNC4xNzQgMy4xMyA1LjA0NGwzNi4zNDggMTUuMzA0TTIyIDUzLjgyNmw5LjkxMy00LjM0OE04MiA1OC4xNzRsLTE1LjY1MiA2LjQzNS0xNS42NTItNi40MzVWOC42MDlMNjYuMzQ4IDIgODIgOC42MDl2NDkuNTY1eiIgc3Ryb2tlPSIjMzUzNTM1IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNODIgOC42MDlsLTE1LjY1MiA2LjQzNEw1MC42OTYgOC42MW0tNS4zOTIgNDYuNjA3bC0xMy43NC01LjczOVYxOS4wNDNsMTMuNzQtNS45MTNtMCAxMC42MWwtMTMuNzQtNC42OTYiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTY2LjM0NiAyMi44N2ExLjc0IDEuNzQgMCAxMDAtMy40NzggMS43NCAxLjc0IDAgMDAwIDMuNDc4em0wIDYuOTU3YTEuNzQgMS43NCAwIDEwMC0zLjQ3OSAxLjc0IDEuNzQgMCAwMDAgMy40Nzl6bTAgNi45NTZhMS43NCAxLjc0IDAgMTAwLTMuNDc4IDEuNzQgMS43NCAwIDAwMCAzLjQ3OHptMCA2Ljk1N2ExLjc0IDEuNzQgMCAxMDAtMy40NzkgMS43NCAxLjc0IDAgMDAwIDMuNDc4em0wIDYuOTU2YTEuNzQgMS43NCAwIDEwMC0zLjQ3OCAxLjc0IDEuNzQgMCAwMDAgMy40Nzh6bTAgNi45NTZhMS43NCAxLjc0IDAgMTAwLTMuNDc4IDEuNzQgMS43NCAwIDAwMCAzLjQ3OHoiIGZpbGw9IiMzNTM1MzUiLz48L3N2Zz4=" alt="" ></img>
                    <h5>Make Snap real</h5>
                    <p>We’re driven beyond just finishing the projects. We want to find smart solutions.</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <img  className="img1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ5LjUzMSA1Ni4yNWMtMi41IDEwLjMxMy02Ljg3NSAxNy4xODgtMTIuMDMxIDE3LjE4OC03LjgxMyAwLTE0LjA2My0xNi4wOTQtMTQuMDYzLTM1LjkzOFMyOS42ODggMS41NjIgMzcuNSAxLjU2MmM0LjM3NSAwIDguMjgxIDUuMTU3IDEwLjkzOCAxMy4xMjYiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTU4LjU5NCAyNi4wOTRjOC45MDYgMi41IDE0Ljg0MyA2LjcxOCAxNC44NDMgMTEuNDA2IDAgNy44MTMtMTYuMDkzIDE0LjA2My0zNS45MzcgMTQuMDYzLTEuODc1IDAtMy43NSAwLTUuNDY5LS4xNTdtLTcuOTY4LS43ODFjLTEzLjEyNS0yLjE4OC0yMi41LTcuMTg4LTIyLjUtMTMuMTI1IDAtNS43ODEgOS4wNjItMTAuNzgxIDIxLjg3NS0xMi45NjkiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTUwLjkzOCAxMi41bC0xLjg3NiA0LjA2M0w0NSAxNC44NDJtMTUuMzEzIDE1LjAwMmwtMi42NTctMy41OTQgMy41OTQtMi42NTYiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTMxLjcxOSAyOC4xMjVsNC42ODcgMTQuMDYzIDQuNjg4LTE0LjA2M2g1LjkzN2MxLjg3NSAwIDMuNTk0IDEuNTYzIDMuNTk0IDMuNTk0IDAgMi4wMzEtMS41NjMgMy41OTMtMy41OTQgMy41OTNoLTEuMjVsNC42ODggNy4wMzIiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+" alt="" ></img>
                    <h5>Total Virtual Reality</h5>
                    <p>We’re driven beyond just finishing the projects. We want to find smart solutions.</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <img className="img1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNzgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIgNjYuMzQ4VjI4LjA4N2MwLTYuNzgzIDE3LjkxMy0xMi4xNzQgNDAtMTIuMTc0czQwIDUuMzkxIDQwIDEyLjE3NHYzOC4yNiIgc3Ryb2tlPSIjMzUzNTM1IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTE3LjY1MiAzNy44MjZDOC4wODcgMzUuNTY2IDIgMzIuMDg2IDIgMjguMDg2djM4LjI2MmMwIDQgNi4wODcgNy40NzggMTUuNjUyIDkuNzM5VjM3LjgyNnptNDkuMzkyLS4xNzR2MzguMjYxYzkuMjE4LTIuMjYgMTQuOTU3LTUuNzQgMTQuOTU3LTkuNTY1VjI4LjA4N2MwIDMuODI2LTUuOTEzIDcuMzA0LTE0Ljk1NyA5LjU2NXpNMTcuNjUyIDU2LjYwOWM2Ljc4My0xLjU2NiAxNS4xMy0yLjQzNSAyNC4zNDgtMi40MzUgOS4yMTcgMCAxNy41NjUuODcgMjQuMzQ4IDIuNDM1TTM2Ljc4MyAyOS44MjZWNDMuNzRsMTMuOTEzLTYuOTU2LTEzLjkxMy02Ljk1N3oiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik03NS4wNDQgMmwzLjQ3OSAzLjQ3OC0zLjQ3OSAzLjQ3OW0zLjQ3OS0zLjQ3OUg1NS45MTRNOC45NTcgMkw1LjQ3OCA1LjQ3OGwzLjQ3OSAzLjQ3OU01LjQ3OCA1LjQ3OGgyMi42MDkiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTM1LjA0NCA3LjIxN2ExLjc0IDEuNzQgMCAxMDAtMy40NzggMS43NCAxLjc0IDAgMDAwIDMuNDc4em02Ljk1NiAwYTEuNzQgMS43NCAwIDEwMC0zLjQ3OCAxLjc0IDEuNzQgMCAwMDAgMy40Nzh6bTYuOTU2IDBhMS43NCAxLjc0IDAgMTAwLTMuNDc4IDEuNzQgMS43NCAwIDAwMCAzLjQ3OHoiIGZpbGw9IiMzNTM1MzUiLz48L3N2Zz4=" alt="" ></img>
                    <h5>Full 360 View</h5>
                    <p>We’re driven beyond just finishing the projects. We want to find smart solutions.</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <img  className="img1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguNzgzIDU5Ljc0bDE1LjgyNiAxNS42NTJNNS40NzggOS4zMDV2NDIuNzgyTTUyLjA4NSA1LjQ3OUg5LjMwM202Ni4yNjMgMTkuMzA0TDU5LjIxOCA4LjQzNW0xOS4zMDQgMjQuMzQ4djQxLjkxM00zMS41NjUgMjcuNzRoNDMuNDc4TTI3Ljc0IDc0Ljg3VjMxLjU2Nm00Ni45NTUgNDYuOTU2aC00My4xM20tNi43ODMtNTMuNzM5TDguOTU2IDguOTU3bTIyLjYwOSA2Ni4wODdIMjQuNjFWODJoNi45NTZ2LTYuOTU3em01MC40MzUgMGgtNi45NTdWODJIODJ2LTYuOTU3ek0zMS41NjUgMjQuNjFIMjQuNjF2Ni45NTZoNi45NTZ2LTYuOTU3em01MC40MzUgMGgtNi45NTd2Ni45NTZIODJ2LTYuOTU3ek04Ljk1NyA1Mi40MzVIMnY2Ljk1N2g2Ljk1N3YtNi45NTd6TTguOTU3IDJIMnY2Ljk1N2g2Ljk1N1Yyem01MC40MzQgMGgtNi45NTZ2Ni45NTdoNi45NTZWMnoiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTU0LjE3NCA0NS40Nzl2MTMuOTEzbTYuOTU2LTYuOTU3SDQ3LjIxOCIgc3Ryb2tlPSIjMzUzNTM1IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+" alt="" ></img>
                    <h5>Artificial Intelligence</h5>
                    <p>We’re driven beyond just finishing the projects. We want to find smart solutions.</p>
                </div>
            </div>
        </div>
        </>)
}


export default Details;