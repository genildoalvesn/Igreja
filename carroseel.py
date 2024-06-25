import flet as ft

def main(page: ft.Page):
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER
    page.bgcolor = ft.colors.WHITE

    layout = ft.Container(
        content=ft.Column(
            controls=[ft.Row(
                controls=[
                    ft.Image(
                        src="{% static f'./image/Screenshot_1.png?{num}' %}"
                    ) for num in range(5)
                ]
            )

            ]

        )
    )
    page.add(layout)

if __name__ == '__main__':
    ft.app(target=main)
