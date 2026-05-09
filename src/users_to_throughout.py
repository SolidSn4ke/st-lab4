import pandas as pd
import matplotlib.pyplot as plt
import sys


def main(file_name: str):
    df = pd.read_csv(file_name)

    first_503_idx = df[df["responseCode"] == 503].index.min()
    df = df.loc[:first_503_idx]

    df_succ = df[df["responseCode"].isin([200, 500])]
    df_fail = df[df["responseCode"] == 503]

    plt.scatter(
        df_succ["allThreads"],
        df_succ["elapsed"],
        c="green",
        s=20,
        label="200 OK/500 Ignore",
    )

    plt.scatter(
        df_fail["allThreads"],
        df_fail["elapsed"],
        c="red",
        s=20,
        label="503 Error",
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
