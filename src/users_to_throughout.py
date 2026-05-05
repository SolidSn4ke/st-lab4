import pandas as pd
import matplotlib.pyplot as plt
import sys


def main(file_name: str):
    df = pd.read_csv(file_name)

    first_503_idx = df[df["responseCode"] == 503].index.min()
    df = df.loc[:first_503_idx]

    df_200 = df[df["responseCode"] == 200]
    df_500_503 = df[df["responseCode"].isin([500, 503])]

    plt.scatter(
        df_200["allThreads"],
        df_200["elapsed"],
        c="green",
        s=20,
        label="200 OK",
    )

    plt.scatter(
        df_500_503["allThreads"],
        df_500_503["elapsed"],
        c="red",
        s=20,
        label="500/503 Error",
    )

    plt.plot([0, 1000], [870, 870])

    plt.xlabel("Количество потоков (нагрузка)")
    plt.ylabel("Время отклика (мс)")
    plt.title("Зависимость времени отклика от нагрузки")
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("not enough args")
    else:
        main(sys.argv[1])
