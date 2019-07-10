import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import zuojiantou from "@/assets/leftjiantou.png"
import { All } from "./js/wodetehui"

class Wodetehui extends Component {
    constructor() {
        super();
        this.state = {
            imgList: [
                {
                    img2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NTgzNjMyRTJGMzIxMUU5QTEwNEM2MEEwMUE5MjM1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NTgzNjMyRjJGMzIxMUU5QTEwNEM2MEEwMUE5MjM1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1ODM2MzJDMkYzMjExRTlBMTA0QzYwQTAxQTkyMzUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ1ODM2MzJEMkYzMjExRTlBMTA0QzYwQTAxQTkyMzUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B1BD9QAABFZJREFUeNrEmGlsDGEYx6db1l1H+aCuIEFSR9K4r7jjrCsIdX5wNSmChDYRfFkVcd8kqDjiDlp3ECKOSEPSSCREhK47LFKhav2f6X94u3bbmdmx8ya/nXnfndn9zzPP+7zP+8QFMxtq/6GlgI6gLqgGagIvSABVOFYLVOZYVSJj8eAHeAC2aj7/afnBOIeFtgH7QScHf3MTxM53UmgXcIkWkvYOfADfwWda6Sv4xrEAKOZYEb8P8FgbpINk/tbESg6J7A3OUqT8+RRwxNSdPn/48aykffi8C9qCDI8DIvuBCxQp1hpuWqRYLiupFUgI8wBi5cPsJUcrNBXkcXLI6x3G119RS+TDiGs8Bh8h9hRoHHLdDx6LoxE6BhznbBWRg8A1E/d5+TDjOcOliY5R4BbEJirXGpb+ZFdoGjjG8PIe9KQ/mWkTGL6k7QJjwU72m4L5YYQG7EymWWA7rVBISz6ycH8PHp+B2ZxMJ2HJ9jh2A12Va+vYtWg6n17uew76WBSpMTRpDEHVOMPFBepxvCicRa0IXaqvFKXtKV/3ExtvJI9HEZYLkdM5sVqHfF/GR82++hVgOc8LwADwxqZ/y0TKAdMY2vop310Ge+36aDZYwvP7YChXnWjaDEaIqaA5fV0iyDb47E+rFo0DW+iX0u6AwVzmom1BWjUn4spk0kfjOWkMkfL0/R0SaaWVG0fjmQHNZP8sl8WimErMShJtNSL5qJfr6xj2T4BJylLmhjX/sWhVOrQh8hBXETdEqsG+jNDq4BwYwf4OMBmUaO61Fsr5aw9Xh1zQl4PrOImCrkksXakWs/cEkUEXmqmIXA0WuSzSy4RnCEdWyodMpukcOM9lUnNRZHWKHMqRNbDmAUNoE2X5clOk7EBPK293FURmaUrC+pbnHVwUKZnUFUVkpirSEHqU59P0/DD2Ihvg8ybozJF5EJkdepmHmdFTJSxlxFCm7JFugHbgl56U+/ybw13o4QarjyJ2U4wmlcTJ6yxa/NIzKZ9/d6SLjYD/EvRirlnqyNiw/keRrWjJlqwDjIbIg+XdoC6hr5jE5v9xaE1bz3TPydZO321qWiPWAVIh8kxFN4VmT+8o9h77C/Rk9u+21omyj1iyPviiZ2U+/wUzN4ZL8wIME8YefQ7TvmjF9uU2pA7rAAPBVbM3R0qci5iDGhutSVwxvDZFDuZvJbAO0NtCHaBcoYZYSflOsT9a33+XZlpW2khwhslPIS370OqTVrRdllx0HHNTjbWlXAti0/hwUlF5wTBYYOeVmNnXl3C3uFPxtWssIJTXDN/2MEZ3t1kHMC3UEDsXbGS/MydCgwjXL1TKPgWM0S+jmYlWKiVBhitjHU6h2NCS9TKwluf5DHevoo1rdopkmQxhsnpJNfg2k9vX9Mk0XnePBTRHtth2S+NiVam9bwDNwJ6Q7y8yYji2xY6mkCtVlG5MEwsZH28xVRzmdB0gLhh0b3sUK4vGtP0WYAAp8g5N3rFQ9AAAAABJRU5ErkJggg==",
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjQ5NDAzNTJGMzIxMUU5QTk3OEFBNDA0MjlCQjVDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjQ5NDAzNjJGMzIxMUU5QTk3OEFBNDA0MjlCQjVDMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NDk0MDMzMkYzMjExRTlBOTc4QUE0MDQyOUJCNUMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2NDk0MDM0MkYzMjExRTlBOTc4QUE0MDQyOUJCNUMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sx1o8gAABFBJREFUeNrEmGlIFVEUx9971iutzDI/RBsVWGALSNke2UarpVGBtn4oS9CigjII9UsZ0b4XtNFCO25lCxVFWBFRIEGgRJRoWdSreJFWr/+J/8Dt9Z7OzJveXPg5M3fuPP9z5t5zzj3O/Px8x39oiWAQ6AAiQVvgBtGgFfvagZbsa02kLwI0gKdgb15eXpH8oNNioX3BCTDYwt/cBbErWlj4g0PAdVpIWj34AL6Dz7TSV/CNfR7QyD4v73t4bA+yQALIKSgoqLBK6GhQQpHyz+eDs3oehLUC9kPcMRwegn4g22WByLGgnCLFWtP0ihTLQVA8iA7wAmLlM7xMCFVoCijj4pDPO5Wfv7kWy5eRqfECfITYy6Cr37gGHhtDEZoGLnC1isiJ4LaO59x8mTlc4dJEx0xwH2JjlbGapT+ZFZoBztO9vAcjOZ/0tLl0X9IOgVngIK+7gxUBhHrMLKalYD+tUENLPjfw/AgeX4JMLqZLsOQAHIeBocrYGLMWzeLby3OvwBiDIh10TQ66oEiucJkCHdnvDWRRI0LXSaTgeTU/d5WJL1LGowgrhchFXFh9/O7/NUf1fnoJX5rDqwTjwVuT81sW0nGwkK5trHLvBjhqdo4WgrU8fwymMOqE0hbTQywAPTnXxYPsw5z9YdSiTrCH81LaAzCJYS7U5qNVjweLTHrnaAQXjSZS3n6cRSKNtCb9aAQzoCW8LmFY9IZTIRaZaGsTbI66GV/TeH0RpCuhzA5r/mPR1pzQmsjTjCJ2iFSd/V9Co8AVMJ3XB8A88NNhX+ulnNe5GB1KQTI7t3ER+exSyEi1hpdV8Ax/hOYqIjeD1TaLdDPhmax1yR9ZTIvYcZVh0mGjyCiKnMKuLbDmSU1oNyV82SlSdqBFytfdBJHrHUrC+o7nA20UKZnUTUVkripSE3qO55IkZNogMg6HeyCJXTkQWeg/zsXMqFpxS9lh1Cl7pLugP/glSTlE7g400MUN1hhF7K4wLSrxk3dYtBCRCyDycLDBmsN/A0Yx1/wzkcHG/ygynpbszTpAKkSeauoBNYTWMol9ok1osJ3pnpVNPvN90IV1gBSILG7uIf/sqZ5iH/F6pSSzyrbWirKPWLIT+CJZGUSW63kwUJrnoZvQ9ujLmPaFKjaZ25AY1gEmgFt6Hw6WOHuZg2obrXRGDLdJkZP4W9GsA4w2UAdoUqgmVlK+y7xOlf03My0jbQYoZvJTQ8s+M/qmzW2XJRedzdzUwdpSqQGxGXw5qai8phusNPNJ9Ozrf3K3eFCZa7dZQGiqaXPbRR893GQdQLdQTexysJPXSVwIcUHGr1LKPpX00W9CWYlGKiU+uistDidSbGe/cRvAVp4/oburDdWvmSmS5dKFSfSSanAFk9s6zskMjnvEApolW2yzpXGxqtTed4Ae4Ijf/Wv0GJZtsUMp5O5hmfAc3c57hsZMegdL6wBOn8+27VHYLBrW9luAAQDP2h8Nf9QWeAAAAABJRU5ErkJggg==",
                    text: "特惠推荐",
                    style2: { color: '#ff6743' },
                    style1: { color: '#666' }
                },
                {
                    img2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzZGNzhCQjJGMzIxMUU5QjQ2MkQzODY0MDIzNjRERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MzZGNzhCQzJGMzIxMUU5QjQ2MkQzODY0MDIzNjRERSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjczNkY3OEI5MkYzMjExRTlCNDYyRDM4NjQwMjM2NERFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjczNkY3OEJBMkYzMjExRTlCNDYyRDM4NjQwMjM2NERFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ETrKUAAAA7xJREFUeNrUmGlIVFEUx9+MGmn7ghWlSZRWH4JsU4SwAivpQ/YhW6ww2yxbiMTISscIQ4roQ2aWLRZREBHaQmEUJVRSVlJQUGBGtAot2DKl0//Qf+Alms/37hvHAz/uvTPvzf3Peefec+5z5ObmahZtNFgAprLfi5/XgxpQAU6B2pZuzsnJMTSJ04LASFAOnoBsEKsTKdYPTAE7wXNwHAwyO5lZoUvAQzCL42tgHRgLQsFAMAlkgSoQABaDx2CGmQkDTdyTCQrYFxGrwIMWrnvH7wvo2SI+hYsMlTN2enSOTmQJiGtFZHO7DqLBJc55gh63RajEXDH7p8Fy8Lsd9zeAJHALBDFmu9ghNJNiX4MVwGMibNwghaKjQKpqofLPl7Evq/irhd2iDhSyv1q10Bh68xc4qVm3ErZjXC5XmEqh0WyrLXrTa8+4K+h/W4nQULa1mjp7yXaA3ZnJp2ZU6Hu2EQrnjtAlBmVC7+viqYcCkVG6cKpWKfQOqyHZqBcpEJrGtgbV0yuVQmVbOsT+FtDTgshwsIb9Qjsy027wEQxmKnWYENmFtWkIt6ijdgitZ34XSwaHGQpGrTs4z0LGzbLPbVf1JBNtYn8pqATjDNw3jYtmJmhkvq+yux7dAz6AA2AiuAdu8E/cBG/ogDAKnA0m6J7KQnDFF4WzWCm4zdpUhMST1qyR98hCfOurCt9rP8Flek+Klv7NQknKwB9MlRUsmj+bnSzQxKqdx3o0ro1rZVcIBiNJBuvQCyy8y+lppUKdXKV5jD19bVnJhPCC8Sme7Ar6Mk2OYCwL3bhjJPP6bKNnJ4eBc30kjw0xHH9hvBXxqGzUJEkkgLk8ewXwcwmJdGSoOivb03we3kTkN+ACQ8Hador0/sGzFDqMWUkefaIcvVFATzcrdKsui8i5fRQQ939SkOvrmEYlHJ6CPuJZiN3QXqE7iLefwB9XbZIExoMj1LIXYjcbFZpObzbxlLidfVsMsdkA0nSOyYfY1LaEyvujfTrBx3xVwUOsOCSfw4MQG9ua0BCeMIMotrgDThzZXHCioRRiQ1oSuo2r8RFfNvjc4FUP32VJmh3OXeYfoVJjelfcShbKWgeJrWcWE8uAV8P1Qjcym5SBu35w6Dyn/X2tKZqyvEKDWVuK7feHozFDYBeHKfBqsJOZoTdfLlT40VG+jEWMpN4kJ+tJjautyV9Uwqvf0VzlMFGqp8kcBLVR/NpieKz/+7qBbbwIHcLBeuKPFurkXuXW/NdEW57D4/FoncE6zdu8PwIMAGki4YPiwdRGAAAAAElFTkSuQmCC",
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RkYzNTA2MTJGMzIxMUU5ODBDQjgyQTJFODlGMzQxQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RkYzNTA2MjJGMzIxMUU5ODBDQjgyQTJFODlGMzQxQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGRjM1MDVGMkYzMjExRTk4MENCODJBMkU4OUYzNDFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGRjM1MDYwMkYzMjExRTk4MENCODJBMkU4OUYzNDFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bBxz0QAAA7lJREFUeNrUmGlIVFEUx9+MC2r7gtWEIlFafQiyTRHCCqSkD9mHbLHCrMyMiEiqsaSMprCi+pCZZYtFFESEtmAYRQmVlJUUFBSY0bRKG7aM6fQ/43/gIZrjm/fG8cBv7n0z7839z5lz7zn3mpybhyle2liwEExnvx/fbwC1oBKcBXXtPm2zezSI2QuB0aAcPAO5IF4lUmwQmAZ2gpfgFNDsFa1Cl4LHYDavb4C1YDwIB0PBFLARVIMAsAQ8BTO1DBio4ZkcUMC+iFgFHrVz3wd+XkDPFvFfuMJQOW+kR+eqRJaAhA5EtrWbIBZc5Zin6XFDhErMFbN/DqwAf7vwfCNIAXdAEGM22AihORT7FqwETg1h4wBpFB0D0vUWKr98Ofsyi394sVrUg0L2V+stNI7ebAJnFO+thO04xWqJ0FNoLNsaL73pthdcFdTfrYvQcLZ1in72mu0QozOTT81ToR/ZRuk4dpQqMegm9KEqnvroIDJGFU41egq9x2pIFurFOgjNYFuL6umNnkJlWTrKvhX09UJkJMhmv9CIzLQXfAbDmUpNGkQGszYN4xJ1wgihDczvYqngGEPBU+sNLrGQcbDscxhVPclAG9hfBqrABA+em8FJMws0M99XG12P7gOfwGEwGTwAt/gjboN3dEAEBc4Bk1T/yiJQ4YvCWawU3GVtKkISSUfWzGdkIr73VYXvtj/gGr0nRcvgNqEkZeBvpspKFs3ftA4WqGHWzmc9mtDJvbIqhILRZA3r0MssvMvpaV2FmjlL8xl76tqyignhFeNTPBkCBjJNjmIsC724YqTy/lxP904mD/b10dw2xPH6O+OtiFtlT02SRBKYx71XAN+XkMhChqr3RugCrpeyQP8Ee8AB8NXLFBrJrXQmBX9xjWWzV2hZR7eosojs28eAbTqIdIdMNsPhORjg8qzVsq6rQncQdz+JX663SRKYCI5Ty36I3eSp0Cx6s4W7xDz2jTGbvRFkqByzC2LTOxMq50cHVYJP+qyEt9nzXCJb7QjExnckNIw7zCCKLe6GHYcsVxeooRRiw9oTuhWMAE942OB7s9mdPMuSNDsSbG8rVGpM94zLZKGsdJPYBmYxxdVaLZFqoeuZTcrAfT/YdF5UWo81Q7jeuoSGsrYUO+QXe+PWENjNqzR4NVSEJoP+PFyo9KOtfBmLGEm9KWbWkwpnW4vfyLTZf+H1Oq+SpXqayougTopfY8xq+d+njWwTpShp7gFHO01mrlUOPxYp2vJNTqdT6QnWY07z/gkwAM7E2kNruZGMAAAAAElFTkSuQmCC",
                    text: "我的特惠",
                    style1: { color: '#ff6743' },
                    style2: { color: '#666' }
                }
            ],
            tabImgList: [
                {
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAYAAAB0kZQKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEzMzVEREIwNUY0NjExRTk4Mjg0QzJFRUEwMURBM0FBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEzMzVEREIxNUY0NjExRTk4Mjg0QzJFRUEwMURBM0FBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTMzNUREQUU1RjQ2MTFFOTgyODRDMkVFQTAxREEzQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTMzNUREQUY1RjQ2MTFFOTgyODRDMkVFQTAxREEzQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ziCjXAAADk0lEQVR42pSWeWjPcRjHdzFMmM0Zi0aOuckSchVyFdOWQs1RruIPV/yjnEORhOUKESZHYo4cIclGcixqzhVbzJE5YsP7qdd3fXz7br/f76lXn+33/X6ez/N9Ps/z/nyiU1NToyK0OmKqyBLdRXPxTTwWZ8Qu8TVcZ8XFxVExId6J9v3fXxSJfWKUaC0qRWMxUGwUL0RGCD//WVAQKWKnKBG/xWR+Hy5uiA7insgUiaK+aEBQ50WyyBPzmDcZPyX4TQkVxCzxVMwRbUS5+MjEkyJebBbpLPSZeT/EJTFWzBZ/xDYxlPnl+JuD/5k1BZEtdot6RNxRtBBXxRpSfkIsEVW1ZHePWCVixRZxDT8d8VuPd7Kr94rCTBLPWWguxeVZE1Em4tiKl2HUmy30isUHiDvOM/O/gyymqjA/epmYSgCXfAF4xVhX3A8zALOf1IfZIN8zy8ZFPm6aux2DGQ8HOExmfBlhK3vvJwU8O+Ku6wXRnLE0YIJXfE0jDMJ7/0vAs1J3XS+Id4ztAyY8Y0ynHcO1Ib75rrVjfOsGcZ1xRoCwWMEWioZiQZgBmGb0Fp+oM79weS160Q3iENmwIswJCGQl4xqnfmoyy+Z+/l6HpLsB5LCOrXfUDaKCLPxGB/LFSPY1nq/ZTpdcFstRSddMF6aLAtEKfdnK/Kb4y8d/JTrxw9UJz0YjSAnOb39R0gNik1jEF30Xt/iiJPTA64TTtF8mwuRm9htSfsE7wOJ8rZjtC+A7kz6hkgcJtAuZGBmwHeVoTQXzPuDTy1wC6xTyrDqIFhRnZ5zYvh0TbxznS8Va5tgCZ8VdHJnQ9RLjREu+cq+Y77R/Csf/MjLUg7OlzLbDUnVFDGM/xyPTrq2nDqo4wDY4+uFaPAfYerrJVHOC76yxDz4n+nKujLAgMqiDUqJ773M8BYX7JSY6clybpbFAMzpkpe+5/f6QrGXEUHRmqwMCSOAkNFsYZgBmT7jYWAYWB4jge9rdbHaM0/dpFF1b5+Us0meXmNwIZfsm+lOXjvKsDet0886PGPo/iptQPsWYx2+TGHNp1UjNO5EnMh7nhpXPBcdsexwFd5gXrcI7Wfv6TtAVdE4Bp+NruqLSp4bJfKmlv58Y49xJYjkCijhPHohT0olH0SFu211JaZ9a3jEtaMQiQfaGurtc0207LkQ6i2il3vR0T7sNcctOZPFEJ5ivKOhrqt8uxrdDXAej/gkwABjY3zALW9WoAAAAAElFTkSuQmCC",
                    zi: "拼团",
                    tabStyle2: { color: '#ff6743' },
                    tabStyle1: { color: "#666" }
                },
                {
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5MkVCMkM4NUY0NjExRTlBRjM1QkFFMzg5NUQxRjE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE5MkVCMkM5NUY0NjExRTlBRjM1QkFFMzg5NUQxRjE5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTkyRUIyQzY1RjQ2MTFFOUFGMzVCQUUzODk1RDFGMTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTkyRUIyQzc1RjQ2MTFFOUFGMzVCQUUzODk1RDFGMTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Au+VxAAACLklEQVR42qyVsUscQRSH9zYHYlAM12ji3aVYCQa1FSFF7kQPxSNJb0glKVNZpBBELETwT1AsTEgRCAhiYeMpEeRaFVEuXHEX0EJJmjNpQn4PfgOPYfZ2Tx34WGZ3Zr+d997MJoIg8NiyIKNIK+RZNzgBk6BuJlUqFS+qJXnd5uSoNghKIKdFcSRZCv6AMifXSF0hz3fAcKuiJEPjUfAyYnxBib6DMYlYlMRXEtdXPQHtqv+bIvmgp7KiPjQ9Ad0AbIARl6Smxj4Hx+An+AXmQkS9FGUoEOEeeAumtCTtkHwFz8AaOAeLoNhElKegxP4uWHJJTLgegwHwCcyAN7w/aoVSRHkWTdkSFFHaDZ14W3INboDEtB+84v1LR84aTHyowKwka0n+MjySl1OwDKpg1SGxQyQhzSJyKT0ogR3/T67gEUOgy1W4AOvgKoagk8Uic3IVHgeykiNOkvrvUi+R/ixYiSNgiGTcvqq6PrOSNCcETGDBWpEXU2D2yUNctlgUsqqcz1zIEfGDO9leUWwBD8wGQ7fLcZu+SnqUyJWDhutLKCqZ091Xz1yijlYFDNlHXBaAFNV733pui8ZvKVii4B1W9SXpGCeiF2ACnN1R8Fn/tOwmu/vgPgRmn3gxd3IPaGtVECZxCQLmad+uuihBmGTeEaJ6SHlHCqQ9SKVS9r0qX/pB5UD+79/AazDEYz/Dg7SpwBwrXgtNH0FeHEGzxIc1s48O+d+ZjhJI+y/AAGVl7QdbCvewAAAAAElFTkSuQmCC",
                    zi: "砍价",
                    tabStyle1: { color: '#ff6743' },
                    tabStyle2: { color: "#666" }
                },
                {
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFGNjBGNUUxNUY0NjExRTk5OTI4QkVDOENCMTRGNjE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFGNjBGNUUyNUY0NjExRTk5OTI4QkVDOENCMTRGNjE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUY2MEY1REY1RjQ2MTFFOTk5MjhCRUM4Q0IxNEY2MTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUY2MEY1RTA1RjQ2MTFFOTk5MjhCRUM4Q0IxNEY2MTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5O4vBVAAABz0lEQVR42oyUSyhFURSG7zkdShRS8hhxDTwmKMqjxAADbqSkZGJGlyQxMjE0MEAYeExkhjBQMvLIY6A7IHdwU4qSV7oTr5R/1Tq12+117ln1dc7Ze59/P9a/thUMBgOGmAKTgcSxEYvFeunFMXSmgiFwCw4EgWLQAmJug0moD2SAfrAtCO2CLzDvNtjaAItXc8+DpdW0gTXwIgk1gVKwAP4EoTF+zqiNutAw+ATLgkgub31LPR9dqAC0g3XwLgjRtpPBtN6hCoX5jOYEkTQwCI7Apd5psY8o5Q8gAhoFoTBP8sHJUOPO0VI+62G+a7CjeC0JFIF8sgKtyOJB1Bn0yJbJBucgDqptnynXIwvssaFDKJMnh1NO8Qo6tB++uUzUCShrm6AQdEIk4pZIKw9YEWavBWfK9yJoABOq+0moAmQbBEZo2SCqtI1zDa7qXrKEa4Tigr1Txt8hLuJj0Ax+qBFbM5aIGymgEpzwdzndPeQX0OWKeNWaG1W87VOQw2fxyyX0ZvrBEYTq+HnFInmclKh0DpJQPXjm65ZWNwAOvYxlEiKn14B00M1ls5TIoSahEpDJ7/tg1I/VbWFbFDegx2/Z2ELbI9/LcZ+1F/gXYADPf1+NVQAROwAAAABJRU5ErkJggg==",
                    zi: "助力",
                    tabStyle1: { color: '#ff6743' },
                    tabStyle2: { color: "#666" }
                },
                {
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2QzU5MEJGNUY0NjExRTlCMTkzQzZFQ0Q3NzE3REI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2QzU5MEMwNUY0NjExRTlCMTkzQzZFQ0Q3NzE3REI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjZDNTkwQkQ1RjQ2MTFFOUIxOTNDNkVDRDc3MTdEQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjZDNTkwQkU1RjQ2MTFFOUIxOTNDNkVDRDc3MTdEQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hKgoNAAACAElEQVR42sSWMUhCURSGr7ccEiJoEKE2HXSIXDXXJGrKRWkVnFqcnZ3dBdfQxaYkcjVdkwYdHAvEIRKhBin7D/wPLuJ7mb7qwMfzvus7/zvn3nvO8wSDQeVgHhADKZAAYbDDuTHogxaog85gMJjZOnIQOgVFEDXuTcGIv/3Aa8w9gALEGssKbYMyyHAsb10Bt6AHPnh/A0TACcgyWrEqyEFw4iQUAHfgAAxBHtSAbUrgUIVCIUlxGpTo4xEkMTdcJCSR3FOkDc6NNCknIcsgKOm8BnGKHVmRaeOZsiFy7CByQRaJjvhsm77K8xHJwt8wXYffRPLC6+58RHORdZnGM9kgmlu4yP/kl0iXnsuEXWR5DouyhprnJMrdVVPuWY0+xXdM8zAqbuGZWyo8vBUOU5onXvGcuG2Wz4TmQZvyMLptPfoOy66TEJ/B/pIPv7LejRfMfYJLpO3K2IFPuOxtrvCW41VCk4jkDX1gy6hjP1l02zlEI/XwHbxpbkEvC6TbFqHvvmY/UazCbpvls6XZtBRLvcctBVb0LId1EeqwaYVZ6t2yNH2K745mNShwssTOuW40fvpS7Lozqzg22BkD7Ce+NUR89CG+qlZrN6twjs1KmlZzlcgYSdNofDmz5FsmnTBpiHX53eBZZuFBhs/EjVY++fePkz/93PqVD8gvAQYATz+4JQ00vA8AAAAASUVORK5CYII=",
                    zi: "秒杀",
                    tabStyle1: { color: '#ff6743' },
                    tabStyle2: { color: "#666" }
                },
            ],
            bool: true,
            flag: '',
            flag1: ''
        }
    }

    render() {
        return (
            <Fragment>
                <All>
                    <div className="head">
                        <img className="headImg1" src={zuojiantou} onClick={this.back.bind(this)} />
                        <span className="headSpan">我的聚特惠</span>
                    </div>
                    <ul className="tab">
                        {
                            this.state.tabImgList.map((item, index) => {
                                return (
                                    <li key={index} className="tabLi" onClick={this.changeTabImg.bind(this, item.zi)}>
                                        {
                                            this.state.bool ?
                                                <div>
                                                    <img className="tabImg" src={item.img1} alt="" />
                                                    <span style={item.tabStyle2}>{item.zi}</span>
                                                </div> :
                                                <div>
                                                    <img className="tabImg" src={item.img1} alt="" />
                                                    <span style={item.tabStyle1}>{item.zi}</span>
                                                </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="text1">
                        <img style={{ marginLeft: "130px", marginTop: "90px", width: "125px" }} src="data:image/png;base64,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" alt="" />
                        <p style={{ paddingLeft: "160px", marginTop: "20px" }}>暂无
                            {
                                this.state.tabImgList.map((item,index) => {
                                    return <span key={index}>{item.zi}</span>
                                })
                            }
                            记录</p>
                    </div>
                    <ul className="tabLow">
                        {
                            this.state.imgList.map((item, index) => {
                                return (
                                    <li key={index} className="lowLi" onClick={this.changeImg.bind(this, item.text)}>
                                        {
                                            this.state.bool ?
                                                <div>
                                                    <img src={item.img1} alt="" />
                                                    <p className="text" style={item.style1}>{item.text}</p>
                                                </div>
                                                : <div>
                                                    <img src={item.img2} alt="" />
                                                    <p className="text" style={item.style2}>{item.text}</p>
                                                </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </All>
            </Fragment>
        )
    }

    back() {
        this.props.history.goBack();
    }

    changeImg(text) {
        if (text !== this.state.flag) {
            this.setState({
                bool: !this.state.bool,
                flag: text
            })
        }
        if (text == "特惠推荐") {
            this.props.history.push("/jutehuiShow")
        }
    }

    changeTabImg(zi) {
        if (zi !== this.state.flag1) {
            this.setState({
                bool: !this.state.bool,
                flag1: zi
            })
        }
    }
}
export default withRouter(Wodetehui);
