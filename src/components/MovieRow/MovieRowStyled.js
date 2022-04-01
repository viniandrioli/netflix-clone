import styled from "styled-components";

export const MovieRowStyled = styled.div`
  margin-bottom: 3rem;
  grid-column: 2 / 3;

  h2 {
    font-size: 2.5rem;
    margin: 0 0 0 3rem;
  }

  .movie-row {
    &__listarea {
      overflow-x: hidden;
      margin-left: 2.3rem;
      display: flex;
    }

    &__item {
      display: inline-block;
      width: 15rem;
      cursor: pointer;

      img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;

        &:hover {
          transform: scale(1);
        }
      }
    }

    &__list {
      flex: 1 0 auto;
      transition: 1s ease-in-out;
    }

    &__icons--left,
    &__icons--right {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 6rem;
      height: 22.5rem;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      opacity: 0;
      transition: 1s ease-in-out;
    }

    &__icons--left {
      left: 6rem;
    }

    &__icons--right {
      right: 0;
    }
  }

  .movie-row__components:hover .movie-row__icons--left {
    opacity: 1;
  }

  .movie-row__components:hover .movie-row__icons--right {
    opacity: 1;
  }
`;
